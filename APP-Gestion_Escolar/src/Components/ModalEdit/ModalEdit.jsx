/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  CircularProgress,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { StudentFormComponent } from "../StudentFormComponent/StudentFormComponent";
import { useForm } from "../../Hooks/useForm";

export const ModalEdit = ({ openModalEdit, setOpenModalEdit, selectedRow }) => {
  const {
    studentsForm,
    handleFileUploadImage,
    handleChange,
    handleCursosChange,
    handleSubmitUpload,
    handleUpdate,
  } = useForm();
  const handleClose = () => setOpenModalEdit(false);
  const handleSave = () => {
    handleSubmitUpload();
    setOpenModalEdit(false);
  };

  useEffect(() => {
    handleUpdate(selectedRow);
  }, [selectedRow]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30%", // Cambia la anchura para que se ajuste mejor al contenido
    maxHeight: "90vh", // Define una altura máxima
    overflow: "auto", // Habilita el scroll si el contenido excede el tamaño
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={openModalEdit}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <StudentFormComponent
          studentsForm={studentsForm}
          handleChange={handleChange}
          handleCursosChange={handleCursosChange}
          handleSubmit={handleSave}
          handleFileUploadImage={handleFileUploadImage}
          handlerButton={handleClose}
          title={"Editar Estudiante"}
          textButton1={"Guardar"}
          textButton2={"Cancelar"}
        />
      </Box>
    </Modal>
  );
};

export default ModalEdit;

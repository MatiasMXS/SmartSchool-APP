/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Modal } from "@mui/material";
import { useEffect } from "react";
import { StudentFormComponent } from "../StudentFormComponent/StudentFormComponent";
import { useForm } from "../../hooks/useForm";

export const ModalEdit = ({
  openModalEdit,
  setOpenModalEdit,
  handleSave,
  studentsForm,
  handleChange,
  handleCursosChange,
  handleFileUploadImage,
}) => {
  const handleClose = () => setOpenModalEdit(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    maxHeight: "90vh",
    overflow: "auto",
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

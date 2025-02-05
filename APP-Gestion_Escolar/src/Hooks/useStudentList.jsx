import { useNavigate } from "react-router";
import { useDeleteStudent } from "./useDeleteStudent";
import { useForm } from "./useForm";
import { useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { CoursesMockup } from "../utils/CoursesMockup";

export const useStudentList = () => {
  const {
    studentsForm,
    handleFileUploadImage,
    handleChange,
    handleCursosChange,
    handleSubmitUpload,
    handleUpdate,
  } = useForm();
  const { handleDelete } = useDeleteStudent();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [selectedRow, setSelectedRow] = useState({
    _id: "",
    nombre: "",
    apellido: "",
    edad: "",
    telefono: "",
    email: "",
    cursos: [],
    myFile: "",
  });

  const getCourseIcon = (courseName) => {
    const course = CoursesMockup.find((icon) => icon.id === courseName);
    return course ? course.icon : "?";
  };

  const handleDeleteClick = (rowData) => {
    setSelectedRow(rowData);
    setOpenModalDelete(true);
  };

  const handleEditClick = (rowData) => {
    setSelectedRow(rowData);
    setOpenModalEdit(true);
  };

  const handleDeleteButton = () => {
    handleDelete(selectedRow);
    setOpenModalDelete(false);
  };

  const handleSave = () => {
    handleSubmitUpload();
    setOpenModalEdit(false);
  };

  useEffect(() => {
    if (selectedRow) handleUpdate(selectedRow);
  }, [selectedRow]);

  return {
    studentsForm,
    handleFileUploadImage,
    handleChange,
    handleCursosChange,
    navigate,
    isMobile,
    openModalDelete,
    setOpenModalDelete,
    openModalEdit,
    setOpenModalEdit,
    getCourseIcon,
    handleDeleteClick,
    handleEditClick,
    handleDeleteButton,
    handleSave,
  };
};

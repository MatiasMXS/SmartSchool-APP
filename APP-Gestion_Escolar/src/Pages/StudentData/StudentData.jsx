import { Avatar, Box, Fab, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import estudainteDefaul from "../../assets/estudianteDefaul.png";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import getStudentsId from "../../services/getStudentsId";
import { CoursesMockup } from "../../Utils/CoursesMockup";
import ModalEdit from "../../components/ModalEdit/ModalEdit";
import { ModalDelete } from "../../components/ModalDelete/ModalDelete";
import { useDeleteStudent } from "../../Hooks/useDeleteStudent";
import { useForm } from "../../Hooks/useForm";

const StudentData = ({ onEdit, onDelete }) => {
  const {
    studentsForm,
    handleFileUploadImage,
    handleChange,
    handleCursosChange,
    handleSubmitUpload,
    handleUpdate,
  } = useForm();
  const { id } = useParams();
  const [student, setStudent] = useState({});
  const navigate = useNavigate();
  const { handleDelete } = useDeleteStudent();
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);

  const fetchData = async () => {
    try {
      const studentData = await getStudentsId(id);
      setStudent(studentData);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [id]);

  const handleDeleteButton = () => {
    handleDelete(student);
    setOpenModalDelete(false);

    setTimeout(() => {
      navigate("/estudiantes");
    }, 500); // Espera de 2 segundos (2000 ms)
  };

  const handleSave = () => {
    handleSubmitUpload();
    setOpenModalEdit(false);

    setTimeout(() => {
      fetchData();
    }, 500);
  };

  useEffect(() => {
    if (student) handleUpdate(student);
  }, [student]);

  const { nombre, apellido, edad, telefono, email, cursos, myFile } = student;

  const getCourseIcon = (courseName) => {
    const course = CoursesMockup.find((icon) => icon.id === courseName);
    return course ? course.icon : "?"; // Devuelve el icono si existe, si no devuelve "?"
  };

  return (
    <Grid container sx={{ height: "100vh" }}>
      {/* Imagen en el lado izquierdo */}
      <Grid item xs={12} md={4}>
        <Box
          sx={{
            height: "100%",
            backgroundImage: `url(${myFile || estudainteDefaul})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Grid>

      {/* Información del estudiante */}
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          pl: 6,
        }}
      >
        <Typography variant="h3" gutterBottom>
          Información del Estudiante
        </Typography>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Nombre: {nombre}
        </Typography>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Apellido: {apellido}
        </Typography>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Edad: {edad}
        </Typography>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Teléfono: {telefono}
        </Typography>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Email: {email}
        </Typography>
      </Grid>

      {/* Cursos inscritos */}
      <Grid
        item
        xs={12}
        md={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Cursos inscritos:
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {cursos?.map((curso, index) => (
            <Box
              key={index}
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <Avatar sx={{ bgcolor: "primary.main", width: 50, height: 50 }}>
                {getCourseIcon(curso)}
              </Avatar>
              <Typography variant="body2" color="text.secondary">
                {curso}
              </Typography>
            </Box>
          ))}
        </Box>
      </Grid>

      {/* Botones a la derecha */}
      <Grid
        item
        xs={12}
        md={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-end",
          pr: 4,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Fab
            color="primary"
            aria-label="edit"
            sx={{ padding: "35px 35px" }}
            onClick={() => setOpenModalEdit(true)}
          >
            <BorderColorIcon />
          </Fab>
          <Fab
            color="secondary"
            aria-label="delete"
            sx={{ padding: "35px 35px" }}
            onClick={() => setOpenModalDelete(true)}
          >
            <DeleteOutlineIcon />
          </Fab>
        </Box>
      </Grid>
      <ModalEdit
        studentsForm={studentsForm}
        handleChange={handleChange}
        handleCursosChange={handleCursosChange}
        handleFileUploadImage={handleFileUploadImage}
        openModalEdit={openModalEdit}
        setOpenModalEdit={setOpenModalEdit}
        handleSave={handleSave}
      />
      <ModalDelete
        openModalDelete={openModalDelete}
        setOpenModalDelete={setOpenModalDelete}
        handleDeleteButton={handleDeleteButton}
      />
    </Grid>
  );
};

export default StudentData;

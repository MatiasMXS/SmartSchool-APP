import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  LinearProgress,
  Typography,
  useMediaQuery,
  Avatar,
} from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import estudainteDefaul from "../../assets/estudianteDefaul.png";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import ModalEdit from "../ModalEdit/ModalEdit";
import { ModalDelete } from "../ModalDelete/ModalDelete";
import ScienceIcon from "@mui/icons-material/Science";
import PaletteIcon from "@mui/icons-material/Palette";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import CalculateIcon from "@mui/icons-material/Calculate";
import { Link } from "react-router-dom";

export const StudentsList = ({ students, isLoading, error }) => {
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
  const courseIcons = [
    {
      id: "Matemática",
      icon: <CalculateIcon />,
    },
    {
      id: "Historia",
      icon: <HistoryEduIcon />,
    },
    {
      id: "Ciencias",
      icon: <ScienceIcon />,
    },
    {
      id: "Arte",
      icon: <PaletteIcon />,
    },
  ];
  const getCourseIcon = (courseName) => {
    const course = courseIcons.find((icon) => icon.id === courseName);
    return course ? course.icon : "?"; // Devuelve el icono si existe, si no devuelve "?"
  };

  const handleDeleteClick = (rowData) => {
    setSelectedRow(rowData);
    console.log(rowData);

    setOpenModalDelete(true);
  };

  const handleEditClick = (rowData) => {
    setSelectedRow(rowData);
    console.log(rowData);
    setOpenModalEdit(true);
  };

  if (isLoading) {
    return (
      <Box component="loading" sx={{ flexGrow: 1, p: 10 }}>
        <LinearProgress color="inherit" />
      </Box>
    );
  }

  if (!Array.isArray(students) || students.length === 0) {
    return (
      <Typography variant="h5" sx={{ flexGrow: 1, p: 10, color: "primary" }}>
        Seleccione una opción
      </Typography>
    );
  }

  if (error) {
    return (
      <Typography variant="h5" sx={{ flexGrow: 1, p: 10, Color: "primary" }}>
        No existen Estudiantes
      </Typography>
    );
  }
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: isMobile ? "100%" : 800,
        backgroundColor: "#fff",
        borderRadius: 2,
        padding: 3,
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
        margin: "0 auto", // Centrado horizontal
        mt: 4, // Separación vertical del componente anterior
        mb: 5,
      }}
    >
      {students.map((student) => (
        <React.Fragment key={students._id}>
          <Link key={students._id} to={`/datos-estudiante/${students._id}`}>
          <Card
            sx={{
              display: "flex",
              width: 750,
              height: 200,
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
              borderRadius: 1,
              mt: 2,
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: 200, objectFit: "cover" }}
              image={student.myFile || estudainteDefaul}
              alt={student.nombre || "Student Image"}
            />

            <CardActionArea
              sx={{ flex: 1, display: "flex", justifyContent: "space-between" }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {student.nombre} {student.apellido}
                </Typography>
                <Typography gutterBottom variant="h6">
                  • Edad: {student.edad}
                </Typography>
                <Typography gutterBottom variant="h6">
                  • Telefono: {student.telefono}
                </Typography>
                <Typography gutterBottom variant="h6">
                  • email: {student.email}
                </Typography>
              </CardContent>
              <Box sx={{ flex: 1, padding: 2 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ position: "sticky", top: 0 }}
                >
                  Cursos inscritos:
                </Typography>
                {student.cursos?.length > 0 ? (
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                  >
                    {student.cursos.map((curso, index) => (
                      <Box
                        key={index}
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Avatar
                          sx={{
                            bgcolor: "primary.main",
                            width: 26,
                            height: 26,
                            fontSize: 16,
                          }}
                        >
                          {getCourseIcon(curso)}
                        </Avatar>

                        <Typography variant="body2" color="text.secondary">
                          {curso}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                ) : (
                  <Typography variant="body2" color="text.secondary">
                    No tiene cursos inscritos.
                  </Typography>
                )}
              </Box>
            </CardActionArea>

            <CardActions
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-end",
                p: 1,
              }}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{ mb: 1 }}
                onClick={() => handleEditClick(student)}
              >
                <BorderColorIcon />{" "}
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleDeleteClick(student)}
              >
                <DeleteOutlineIcon />
              </Button>
            </CardActions>
          </Card>
          </Link>
          <ModalEdit
            openModalEdit={openModalEdit}
            setOpenModalEdit={setOpenModalEdit}
            selectedRow={selectedRow}
            
          />
          <ModalDelete
            openModalDelete={openModalDelete}
            setOpenModalDelete={setOpenModalDelete}
            selectedRow={selectedRow}
          />
        </React.Fragment>
      ))}
    </Box>
  );
};

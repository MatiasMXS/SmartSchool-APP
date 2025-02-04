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
  Avatar,
} from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ScienceIcon from "@mui/icons-material/Science";
import PaletteIcon from "@mui/icons-material/Palette";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import CalculateIcon from "@mui/icons-material/Calculate";
import fondo from "../../assets/hero_1.jpg";
import React, { useState } from "react";
import ModalEdit from "../ModalEdit/ModalEdit";
import { ModalDelete } from "../ModalDelete/ModalDelete";

export const StudentsList = ({ students, isLoading, error }) => {
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [selectedRow, setSelectedRow] = useState({
    _id: "",
    nombre: "",
    apellido: "",
    email: "",
    cursos: [],
    myFile: "",
  });

  const courseIcons = {
    arte: <PaletteIcon />,
    ciencias: <ScienceIcon />,
    historia: <HistoryEduIcon />,
    matemática: <CalculateIcon />,
  };

  const handleDeleteClick = (rowData) => {
    setSelectedRow(rowData);
    setOpenModalDelete(true);
  };

  const handleEditClick = (rowData) => {
    setSelectedRow(rowData);
    setOpenModalEdit(true);
  };

  if (isLoading) {
    return (
      <Box sx={{ flexGrow: 1, p: 10 }}>
        <LinearProgress color="inherit" />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h5" sx={{ flexGrow: 1, p: 10 }}>
        No existen tareas con este nivel de prioridad
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 4,
        mb: 5,
      }}
    >
      {students.map((student) => (
        <React.Fragment key={student._id}>
          <Card sx={{ display: "flex", width: 750, height: 200, mt: 2 }}>
            <CardMedia
              component="img"
              sx={{ width: 200 }}
              image={student.myFile || fondo}
              alt={student.nombre || "Student Image"}
            />

            <CardActionArea
              sx={{ display: "flex", justifyContent: "space-between", flex: 1 }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {student.nombre} {student.apellido}
                </Typography>
                <Typography gutterBottom variant="h6">
                  Edad:
                </Typography>
                <Typography gutterBottom variant="h6">
                  Email: {student.email}
                </Typography>
              </CardContent>

              {/* Cursos */}
              <Box
                sx={{ flex: 1, padding: 2, maxHeight: 175, overflowY: "auto" }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ position: "sticky", top: 0, backgroundColor: "#fff" }}
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
                            width: 28,
                            height: 28,
                          }}
                        >
                          {courseIcons[curso]
                            ? React.cloneElement(courseIcons[curso], {
                                fontSize: "small",
                              })
                            : "?"}
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
              }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleEditClick(student)}
              >
                <BorderColorIcon />
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

{
  student.cursos.map((curso, index) => {
    // Buscar el ícono correspondiente al curso
    const iconData = courseIcons.find((icon) => icon.id === parseInt(curso.id));

    return (
      <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Avatar
          sx={{
            bgcolor: "primary.main",
            width: 24,
            height: 24,
            fontSize: 16,
          }}
        >
          {iconData?.icon || "?"}
        </Avatar>
        <Typography variant="body2" color="text.secondary">
          {curso.nombre}
        </Typography>
      </Box>
    );
  });
}

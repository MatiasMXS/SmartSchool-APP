import { Box, LinearProgress, Typography } from "@mui/material";
import StudentsTable from "../../Components/StudentsTable/StudentsTable";
import { StudentsToolBar } from "../../Components/StudentsToolBar.jsx/StudentsToolBar";

import ChildCareIcon from "@mui/icons-material/ChildCare";
import { useDispatch, useSelector } from "react-redux";
import { getStudents } from "../../services/getStudents";
import { useEffect } from "react";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const { students, isLoading, error } = useSelector((state) => state.students);

  useEffect(() => {
    dispatch(getStudents());
  }, [dispatch]);

  if (isLoading) {
    return (
      <Box component="loading" sx={{ flexGrow: 1, p: 10 }}>
        <LinearProgress color="inherit" />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h5" sx={{ flexGrow: 1, p: 10, Color: "primary" }}>
        No existen tareas con este Nibel de prioridad
      </Typography>
    );
  }

  return (
    <Box>
      <br></br>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "16px", // Espaciado entre el título y el resto
          justifyContent: "flex-start", // Controla la posición
          paddingLeft: "400px", // Ajusta la posición horizontal
        }}
      >
        <ChildCareIcon sx={{ fontSize: "32px" }} />{" "}
        {/* Tamaño ajustado del ícono */}
        <span
          style={{
            fontWeight: "bold",
            fontSize: "36px", // Tamaño más grande
            textAlign: "left", // Alineado a la izquierda
          }}
        >
          Estudiantes
        </span>
      </Box>
      <Box
        sx={{
          display: "flex", // Para habilitar flexbox
          flexDirection: "column", // Flujo vertical
          alignItems: "center", // Centrar horizontalmente
          margin: "0 auto", // Centrar el contenedor en la pantalla
          gap: "8px", // Espaciado reducido entre elementos
          padding: "16px", // Opcional: Espaciado interno
        }}
      >
        <StudentsToolBar sx={{ marginBottom: 0 }} />
        <StudentsTable students={students} />
      </Box>
    </Box>
  );
};

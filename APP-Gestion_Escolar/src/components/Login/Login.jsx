import {
  Box,
  TextField,
  Button,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detecta móviles (menos de 600px)

  const handleLogin = () => {
    if (username === "escuela" && password === "escuela") {
      navigate("/estudiantes");
    } else {
      setError("Credenciales incorrectas. Intenta nuevamente.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row", // En móviles, los elementos se apilan
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
      }}
    >
      {/* Sección izquierda con texto */}
      <Box
        sx={{
          width: isMobile ? "90%" : "70%", // En móviles más ancho
          textAlign: isMobile ? "center" : "left",
          paddingLeft: isMobile ? 0 : "10%", // Solo margen izquierdo en escritorio
          mb: isMobile ? 4 : 0, // Espaciado en móviles
        }}
      >
        <Typography variant="h3" fontWeight={500} mb={2} color="#fff">
          SmartSchool APP
        </Typography>
        <Typography variant="body1" fontSize="18px" color="#a3abb1">
          Esta aplicación te ayudará a gestionar a todos tus estudiantes de una
          manera rápida y precisa.
        </Typography>
      </Box>

      {/* Sección derecha con el formulario */}
      <Box
        sx={{
          width: isMobile ? "90%" : "50%", // Ajuste para móviles y escritorio
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: isMobile ? "100%" : 500, // Ancho fijo en escritorio, flexible en móviles
            backgroundColor: "#fff",
            borderRadius: 3,
            padding: 6,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 3,
              fontWeight: 300,
              textAlign: "left",
            }}
          >
            Iniciar Sesión
          </Typography>

          <TextField
            label="Usuario"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Contraseña"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <Typography color="error" variant="body2" mt={2}>
              {error}
            </Typography>
          )}

          <Box mt={3}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#6194cd",
                color: "#fff",
                fontWeight: "bold",
                borderRadius: "40px",
                padding: "20px 0",
                width: isMobile ? "100%" : "40%", // Botón más ancho en móviles
                ":hover": {
                  backgroundColor: "#3a6696",
                },
              }}
              onClick={handleLogin}
            >
              INGRESAR
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

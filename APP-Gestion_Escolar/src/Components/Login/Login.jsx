
import { Box, TextField, Button, Typography, Container } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "escuela" && password === "escuela") {
      navigate("/dashboard");
    } else {
      setError("Credenciales incorrectas. Intenta nuevamente.");
    }
  };

  return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
         
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            width: "100%",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h1"
            align="center"
            sx={{ mb: 2,  }}
          >
            SmartSchool AAP
          </Typography>
          <Typography
            variant="h3"
            align="center"
            sx={{ mb: 5,  }}
          >
            Aplicacionde de gestion escolar
          </Typography>
        </Box>
        <Container
          sx={{
            width: 400,
           
            borderRadius: 2,
            padding: 4,
            boxShadow: "7px 13px 37px #000",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{
              mb: 3,
              fontWeight: "bold",
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
            InputProps={{
              style: {},
            }}
            InputLabelProps={{ style: {  } }}
          />
          <TextField
            label="Contraseña"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              style: { },
            }}
            InputLabelProps={{ style: {  } }}
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
              onClick={handleLogin}
              sx={{
                // Color primario
                mt: 2,
                mb: 2,
                ":hover": {
                // Hover primario
                },
              }}
            >
              Ingresar
            </Button>
          </Box>
        </Container>
      </Box>
  
  );
};

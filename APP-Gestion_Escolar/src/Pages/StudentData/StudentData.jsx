import { Avatar, Box, Fab, Grid, Typography } from "@mui/material";
import estudainteDefaul from "../../assets/estudianteDefaul.png";
import ScienceIcon from "@mui/icons-material/Science";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const StudentData = ({ studentData, onEdit, onDelete }) => {
  const { nombre, apellido, edad, telefono, email, cursos } = studentData || {};

  return (
    <Grid container sx={{ height: "100vh" }}>
      {/* Imagen en el lado izquierdo */}
      <Grid item xs={12} md={4}>
        <Box
          sx={{
            height: "100%",
            backgroundImage: `url(${estudainteDefaul})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Grid>

      {/* Información del estudiante en el centro */}
      <Grid
        item
        xs={12}
        md={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h3" gutterBottom sx={{ mb:5 }}>
            Información del Estudiante
          </Typography>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Nombre: {nombre}
          </Typography>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Apellido: {apellido}
          </Typography>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Edad: {edad}
          </Typography>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Teléfono: {telefono}
          </Typography>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Email: {email}
          </Typography>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        md={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      ><Box sx={{ mb: 3 }}>
      <Typography variant="h4" gutterBottom>
        Cursos inscritos:
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {cursos?.map((curso, index) => (
          <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Avatar sx={{ bgcolor: "primary.main", width: 40, height: 40 }}>
              <ScienceIcon />
            </Avatar>
            <Typography variant="body2" color="text.secondary">
              {curso}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box></Grid>

      {/* Cursos inscritos y botones */}
      <Grid
        item
        xs={12}
        md={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >

        {/* Botones FAB verticalmente centrados */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Fab color="primary" aria-label="edit" onClick={onEdit}>
            <BorderColorIcon />
          </Fab>
          <Fab color="secondary" aria-label="delete" onClick={onDelete}>
            <DeleteOutlineIcon />
          </Fab>
        </Box>
      </Grid>
    </Grid>
  );
};

export default StudentData;

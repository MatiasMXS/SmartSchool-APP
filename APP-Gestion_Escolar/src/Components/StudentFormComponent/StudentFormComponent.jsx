/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import estudainteDefaul from "../../assets/estudianteDefaul.png";
const listaDeCursos = ["Matemática", "Historia", "Ciencias", "Arte"];
export const StudentFormComponent = ({
  studentsForm,
  handleChange,
  handleCursosChange,
  handleSubmit,
  handleFileUploadImage,
  handlerButton,
  title,
  textButton1,
  textButton2,
}) => {
  return (
    <Card style={{ maxWidth: "800px", width: "100%", margin: "0 auto" }}>
      <Grid container spacing={3} sx={{ padding: "30px" }}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
        </Grid>

        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <CardActionArea sx={{ maxWidth: 300, margin: "0 auto" }}>
            <input
              type="file"
              id="file-upload"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileUploadImage}
            />
            <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
              <CardMedia
                component="img"
                image={studentsForm.myFile || estudainteDefaul}
                alt="imagen de estudiante"
                sx={{ width: "100%", height: "300px", objectFit: "cover" }}
              />
            </label>
          </CardActionArea>
        </Grid>

        {/* Formulario */}
        <Grid container item spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Nombre"
              name="nombre"
              value={studentsForm?.nombre}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Apellido"
              name="apellido"
              value={studentsForm?.apellido}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Edad"
              name="edad"
              type="number"
              value={studentsForm?.edad}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Teléfono"
              name="telefono"
              type="tel"
              value={studentsForm?.telefono}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Email"
              name="email"
              type="email"
              value={studentsForm?.email}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="cursos-label">Cursos</InputLabel>
              <Select
                multiple
                label="Cursos"
                value={studentsForm.cursos}
                onChange={handleCursosChange}
                renderValue={(selected) => selected.join(", ")}
              >
                {listaDeCursos.map((curso) => (
                  <MenuItem key={curso} value={curso}>
                    <Checkbox checked={studentsForm.cursos.includes(curso)} />
                    <ListItemText primary={curso} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        {/* Botones */}
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 2 }}
        >
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            {textButton1}
          </Button>
          <Button variant="contained" color="secondary" onClick={handlerButton}>
            {textButton2}
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

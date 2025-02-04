/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Checkbox,
  FormControl,
  Grid2,
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
    <>
      <Card style={{ maxWidth: "800px", width: "100%", alignSelf: "center" }}>
        <Grid2
          container
          spacing={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "30px",
            alignItems: "center",
          }}
        >
          <Grid2 item xs={12} sx={{ width: "100%" }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ textAlign: "left", width: "100%" }}
            >
              {title}
            </Typography>
          </Grid2>
          <CardActionArea
            sx={{
              width: "300px",
              height: "300px",
              objectFit: "cover",
              margin: "0 auto",
            }}
          >
            <input
              type="file"
              id="file-upload"
              accept=".jpeg, .png, .jpg"
              style={{ display: "none" }}
              onChange={handleFileUploadImage}
            />
            <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
              <CardMedia
                component="img"
                image={studentsForm.myFile || estudainteDefaul}
                alt="imagen de estudiante"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // Ajusta la imagen sin deformarla
                }}
              />
            </label>
          </CardActionArea>

          <Grid2
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "80px",
              alignItems: "center",
            }}
          >
            <Grid2 item xs={4}>
              <TextField
                fullWidth
                variant="outlined"
                label="Nombre"
                name="nombre"
                value={studentsForm?.nombre}
                onChange={(e) => handleChange(e)}
              />
            </Grid2>

            <Grid2 item xs={4}>
              <TextField
                fullWidth
                variant="outlined"
                label="Apellido"
                name="apellido"
                value={studentsForm?.apellido}
                onChange={(e) => handleChange(e)}
              />
            </Grid2>
          </Grid2>
          <Grid2
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "80px",
              alignItems: "center",
            }}
          >
            <Grid2 item xs={3}>
              <TextField
                fullWidth
                variant="outlined"
                label="Email"
                name="email"
                value={studentsForm?.email}
                onChange={(e) => handleChange(e)}
              />
            </Grid2>
            <Grid2 item xs={4} sx={{ minWidth: 225 }}>
              <InputLabel id="demo-multiple-checkbox-label">Cursos</InputLabel>
              <FormControl fullWidth>
                <Select
                  multiple
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
            </Grid2>
          </Grid2>

          <Grid2
            item
            xs={12}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "10px",
              marginTop: "20px",
            }}
          >
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              {textButton1}
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handlerButton}
            >
              {textButton2}
            </Button>
          </Grid2>
        </Grid2>
      </Card>
    </>
  );
};

/*<Button
          variant="contained"
          onClick={}
          disabled={añadiendoProducto}
        >
          {añadiendoProducto ? <CircularProgress size={24} /> : "Guardar"}
        </Button>*/

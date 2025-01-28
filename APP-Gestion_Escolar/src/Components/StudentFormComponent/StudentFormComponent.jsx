/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";


export const StudentFormComponent = ({ title, textButton1, textButton2}) => {
    

  return (
    <>
      <Card style={{ maxWidth: "800px", width: "100%", alignSelf: "center" }}>
        <Grid2
          container
          spacing={3}
          sx={{ display: "flex", flexDirection: "column", margin: "20px" }}
        >
          <Grid2 item xs={12}>
            <Typography variant="h5" gutterBottom>
              {title}
            </Typography>
          </Grid2>
          <Grid2
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "12px",
              alignItems: "center",
            }}
          >
            <Grid2 item xs={4}>
              <TextField
                fullWidth
                variant="outlined"
                label="Titulo"
                name="titulo"
                value={() => {}}
                onChange={() => {}}
              />
            </Grid2>

            <Grid2 item xs={4}>
            <TextField
              fullWidth
              variant="outlined"
              label="Materia"
              name="materia"
              value={() => {}}
              onChange={() => {}}
            />
          </Grid2>
            
          </Grid2>
          <Grid2
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "12px",
              alignItems: "center",
            }}
          >
            <Grid2 item xs={4} sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Prioridad</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={() => {}}
                  label="Prioridad"
                  onChange={() => {}
                  }
                >
                  <MenuItem value={"alta"}>alta</MenuItem>
                  <MenuItem value={"media"}>media</MenuItem>
                  <MenuItem value={"baja"}>baja</MenuItem>
                </Select>
              </FormControl>
            </Grid2>
            <Grid2 item xs={3}>
            <TextField
              fullWidth
              variant="outlined"
              label="Etiqueta"
              name="etiquetas"
              value={() => {}}
              onChange={() => {}}
            />
          </Grid2>
          </Grid2>
          
          <Grid2 item xs={3}>
            <TextField
              fullWidth
              variant="outlined"
              label="Descripcion"
              name="descripcion"
              value={() => {}}
              onChange={() => {}}
            />
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
            <Button variant="contained" color="primary" onClick={() => {}}>
              {textButton1}
            </Button>
            <Button variant="contained" color="secondary" onClick={() => {}}>
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
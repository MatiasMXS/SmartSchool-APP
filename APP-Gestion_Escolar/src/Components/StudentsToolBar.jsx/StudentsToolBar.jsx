import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate } from "react-router-dom";

export const StudentsToolBar = () => {
  const navigate = useNavigate(); 
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 16px",
        backgroundColor: "#f8f8f8",
        borderRadius: "8px",
        gap: "12px",
        width: "69%"
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
       
        
      </Box>
      <TextField
        size="small"
        placeholder="Buscar..."
        variant="standard"
        value={() => {}}
        onChange={() => {}}
        sx={{ flex: 1 }}
      />

      <Button variant="contained" color="primary">
        <SearchIcon />
      </Button>
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span
          style={{ fontWeight: "bold", fontSize: "16px", color: "#8a2be2" }}
        >
          Curso:
        </span>
        <FormControl size="small" variant="standard">
          <Select
            value={() => {}}
            onChange={() => {}}
            displayEmpty
            sx={{ minWidth: "150px" }}
          >
            <MenuItem value="">Matemática</MenuItem>
            <MenuItem value="autor">Historia</MenuItem>
            <MenuItem value="categoria">Ciencias</MenuItem>
            <MenuItem value="categoria">Arte</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={() => navigate("/add")} // Usa navigate aquí
        sx={{
          textTransform: "none",
          backgroundColor: "#8a2be2",
          ":hover": { backgroundColor: "#6a1bbf" },
        }}
      >
        Nuevo Estudiante
      </Button>
    </Box>
  );
};

export default StudentsToolBar;

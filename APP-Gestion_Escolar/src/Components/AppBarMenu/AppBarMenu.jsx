import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Fab } from "@mui/material";
import { useAppBarMenu } from "../../Hooks/useAppbarMenu";

export default function AppBarMenu({ children }) {
  const { location, navigate, value, setValue, handleChange } = useAppBarMenu();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{ backgroundColor: "#fff", padding: "5px 0", gap: "12px" }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
            color="black"
          >
            SmartSchool AAP
          </Typography>
          <Box
            sx={{
              width: "40%",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="primary"
              indicatorColor="primary"
              aria-label="secondary tabs example"
              sx={{}}
            >
              <Tab
                value="estudiantes"
                label="Estudiantes"
                sx={{
                  color: value === "estudiantes" ? "primary.main" : "black",
                }}
              />
              <Tab
                value="cursos"
                label="Cursos"
                sx={{ color: value === "cursos" ? "primary.main" : "black" }}
              />
            </Tabs>
          </Box>
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#6194cd",
              color: "#fff",
              fontWeight: "bold",
              borderRadius: "40px",
              padding: "15px 0",
              width: "15%", // Botón más ancho en móviles
              ":hover": {
                backgroundColor: "#3a6696",
              },
            }}
            onClick={() => navigate("/")}
          >
            Cerrar sesión
          </Button>
        </Toolbar>
      </AppBar>
      {location.pathname !== "/add" &&
        !location.pathname.startsWith("/datos-estudiante") && (
          <Fab
            color="primary"
            aria-label="add"
            onClick={() => {
              navigate("/add");
              setValue("add");
            }}
            sx={{
              position: "fixed",
              padding: "35px 35px",
              bottom: 16,
              right: 16,
            }}
          >
            <AddIcon />
          </Fab>
        )}
      {children}
      <Outlet />
    </Box>
  );
}

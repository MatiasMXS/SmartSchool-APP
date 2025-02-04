import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import fondo from "../../assets/hero_1.jpg";

export const Location = () => {
  const location = useLocation();

  const currentPage = location.pathname.replace("/", "") || "Inicio";
  const pageTitle = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);

  return (
    <Box
      sx={{
        position: "relative",
        padding: 20,
        backgroundImage: `url(${fondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(52, 57, 63, 0.7)",
          zIndex: 1,
        }}
      />
      <Typography
        variant="h4"
        sx={{
          color: "white",
          position: "absolute",
          bottom: 25,
          left: 20,
          zIndex: 2,
        }}
      >
        /{pageTitle}
      </Typography>
    </Box>
  );
};

import { createTheme } from "@mui/material/styles";
import "@fontsource/m-plus-1p/300.css"; // Regular
import "@fontsource/m-plus-1p/400.css"; // Thin
import "@fontsource/m-plus-1p/900.css"; // Thin
import "@fontsource/lexend-deca/400.css"; // Regular
import "@fontsource/lexend-deca/800.css";

const theme = createTheme({
  typography: {
    fontFamily: '"Lexend Deca", sans-serif',
    h2: {
      fontFamily: '"M PLUS 1p", sans-serif',
      fontWeight: 300,
    },
    h3: {
      fontFamily: '"Lexend Deca", sans-serif',
      fontWeight: 400,
    },
    h4: {
      fontFamily: '"M PLUS 1p", sans-serif',
      fontWeight: 400, // Thin
    },
    h5: {
      fontFamily: '"M PLUS 1p", sans-serif',
      fontWeight: 900, // Thin
    },
    body1: {
      fontFamily: '"M PLUS 1p", sans-serif',
      fontWeight: 300,
    },
  },
  palette: {
    primary: {
      main: "#007BFF", // Azul principal
    },
    secondary: {
      main: "#6194cd", // Otro tono de azul que usaste antes
    },
    text: {
      primary: "#333",
      secondary: "#a3abb1",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "40px",
          textTransform: "none",
          fontWeight: 800,
          fontFamily: '"Lexend Deca", sans-serif',
        },
      },
    },
  },
});

export default theme;

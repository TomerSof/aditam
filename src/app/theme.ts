import { createTheme } from "@mui/material/styles";
import { brown, deepOrange, grey } from "@mui/material/colors";

const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      primary: {
        light: grey[300],
        main: grey[500],
        dark: grey[700],
        contrastText: brown[500],
      },
      secondary: { main: deepOrange[500] },
      background: {
        default: mode === "dark" ? grey[900] : grey[100],
        paper: mode === "dark" ? grey[800] : grey[50],
      },
      text: {
        primary: mode === "dark" ? grey[100] : grey[900],
        secondary: mode === "dark" ? grey[300] : grey[700],
      },
    },
    typography: {
      fontFamily: '"Roboto", "Arial", sans-serif',
      h1: { fontFamily: '"Playfair Display", serif', fontWeight: 700 },
      h2: { fontFamily: '"Playfair Display", serif', fontWeight: 600 },
      h4: { fontFamily: '"Lora", serif', fontWeight: 500 },
      body1: { fontFamily: '"Roboto", sans-serif', fontWeight: 400 },
      body2: { fontFamily: '"Open Sans", sans-serif', fontWeight: 400 },
      button: {
        fontFamily: '"Lora", serif',
        fontWeight: 700,
        fontSize: "1.2rem",
      },
    },
  });

export default getTheme;

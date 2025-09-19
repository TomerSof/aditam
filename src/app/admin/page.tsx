"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";

export default function AdminPage() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#121212" : "#f5f5f5",
        paper: darkMode ? "#1e1e1e" : "#ffffff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bgcolor="background.default"
        color="text.primary"
        p={2}
      >
        <Typography variant="h3" gutterBottom>
          Admin Page
        </Typography>

        <Button variant="contained" onClick={() => setDarkMode(!darkMode)}>
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </Button>
      </Box>
    </ThemeProvider>
  );
}

import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import App from "./App";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
    body1: {
      fontFamily: "Lato, sans-serif",
    },
    body2: {
      fontFamily: "Lato, sans-serif",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

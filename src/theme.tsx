import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 320,
      md: 720,
      lg: 1000,
      xl: 1600,
    },
    unit: "rem",
  },
  direction: "ltr",
});

export default theme;

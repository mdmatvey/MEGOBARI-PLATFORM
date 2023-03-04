import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            light: '#6d8d3a',
            main: '#4c6e32',
            dark: '#05372e',
            contrastText: '#fff',
        },
        secondary: {
            light: '#fff', // ?
            main: '#f7d8ad', // ?
            dark: '#000', // ?
            contrastText: '#fff',
        }
    }
});

export default theme

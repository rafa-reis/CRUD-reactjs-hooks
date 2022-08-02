import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2a9cb9',
    },
    secondary: {
      main: '#1c2d66',
    },
  },
  //   components: {
  //     // Name of the component
  //     MuiPaper: {
  //       styleOverrides: {
  //         // Name of the slot
  //         root: {
  //           // Some CSS
  //           padding: "20px",
  //           borderRadius: "10px",
  //         },
  //       },
  //     },
  //   },
});

export default defaultTheme;

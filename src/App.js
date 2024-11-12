import AppRoutes from "./components/AppRoutes";
import './assets/style/shared/main.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { deepPurple,grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: grey
  },
});

function App() {
  return (<ThemeProvider theme={theme}><AppRoutes/></ThemeProvider>);
}

export default App;
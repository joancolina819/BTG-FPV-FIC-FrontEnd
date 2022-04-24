import generateStore from "../redux/store";
import { Provider } from "react-redux";
import Banner from "./Banner";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavBar from "./NavBar";
import { Divider } from "@mui/material";
import Historial from "./Historial";
import Home from "./Home";
import Gestorfondos from "./GestorFondos";
import { Stack } from "@mui/material";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  const store = generateStore()
  
  const theme = createTheme({
    palette : {
      primary:{
        main: '#001E62'
      },
      secondary:{
        main: '#195AB4',
        light: '#B8CCEA'
      },
      text:{
        primary: '#404040',
        secondary: '#FFFFFF'
      }
    },
    typography:{
      fontFamily:'Arial'
    }
  })

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Banner />
          <Divider/>
          <Stack spacing={1} direction = "row" divider={<Divider  />}  > 
            <NavBar />
              <Routes >
                <Route  exact path="historial" element={<Historial/>}/>
                <Route  exact path="gestorfondos" element={<Gestorfondos/>}/>
                <Route  exact path="/" element={<Home/>}/>
            </Routes >
          </Stack>
        </Provider>
      </ThemeProvider>
    </Router>
  );
}


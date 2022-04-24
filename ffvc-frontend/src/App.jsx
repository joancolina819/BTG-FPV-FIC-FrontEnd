import Historial from "./components/Historial";
import generateStore from "./redux/store";
import { Provider } from "react-redux";
import Banner from "./components/Banner";
import { ThemeProvider, createTheme } from "@mui/material/styles";


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
        secondary: '#7F7F7F'
      }
    },
    typography:{
      fontFamily:'Arial'
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Banner />
        <Historial/>
      </Provider>
    </ThemeProvider>
  );
}


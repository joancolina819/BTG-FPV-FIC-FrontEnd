import React from "react";
import { AppBar,Container,Toolbar} from "@mui/material";
import Mensaje from "./Mensaje";
import Notificacion from "./Notificacion";
import {useSelector, useDispatch} from 'react-redux'
import {get_client} from '../redux/fondoDuck'
import BTG_logo from '../assets/btg-portada.jpg'
import InformacionUsuario from "./InformacionUsuario";

export default function Banner(){

    const dispatch = useDispatch()
    const client = useSelector(store=> store.fondos.client)

    const [open, setOpen] = React.useState(false);
    const [severity, setSeverity] = React.useState("info");
    const [mensajeNotificacion, setMensajeNotificacion] = React.useState("");
    
    React.useEffect(()=>{
      dispatch(get_client())
      setMensajeNotificacion("Usuario " +client["nombre"]+" cargado exitosamente")
      setSeverity("info")
      setOpen(true)
    }, [dispatch,client]);

    return(
      <AppBar 
          color= 'primary' 
          sx={{
            border:2,
            borderRadius:2,
          }} 
          position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img src={BTG_logo} alt="LogoBTG"></img>
            <Mensaje tipo ="h6" mensaje ="Usuario:"  color ='text.secondary' />
            <Mensaje tipo ="h5" mensaje ={client.nombre+" "+client.apellido} width = "40%" color ='text.secondary' fontWeight = 'bold'/>
            <Mensaje tipo ="h6" mensaje ="Capital:"  color ='text.secondary' />
            <Mensaje tipo ="h5" mensaje ={client.presupuesto} width = "60%"  color ='text.secondary' fontWeight = 'bold'/>
            <InformacionUsuario cliente={client}/>
            <Notificacion open={open} setOpen={setOpen} mensaje_notificacion={mensajeNotificacion} severity={severity}/>
          </Toolbar>
        </Container>
      </AppBar>
    )
}

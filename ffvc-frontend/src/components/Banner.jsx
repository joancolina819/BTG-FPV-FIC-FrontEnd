import React from "react";
import { Stack,Box } from "@mui/material";
import Mensaje from "./Mensaje";
import Notificacion from "./Notificacion";
import {useSelector, useDispatch} from 'react-redux'
import {get_client} from '../redux/fondoDuck'
import BTG_logo from '../assets/btg-portada.jpg'
import {Navbar} from 'react-materialize'
import {Link} from "react-router-dom";

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
    }, [dispatch]);

    return(
      // <Navbar
      //   alignLinks="right"
      //   centerChildren
      //   className="indigo darken-4"
      //   id="mobile-nav"

      //   >
      //     <Link to="historial">test</Link>
      // </Navbar>
        <Box   sx={{
            width: "full",
            height: 55,
            backgroundColor: 'primary.main',
            border:2,
            borderRadius:2,
            borderColor: "primary.main"
          }} >
            <Stack direction="row" >
              <img src={BTG_logo}></img>
              <Box sx={{ width: "100%",pl:10,pt:1}}>
                <Stack direction="row" >
                  <Mensaje tipo ="h6" mensaje ="Usuario:" width = "20%" color ='text.secondary' />
                  <Mensaje tipo ="h5" mensaje ={client.nombre+" "+client.apellido} width = "100%" color ='text.secondary' fontWeight = 'bold'/>
                  <Mensaje tipo ="h6" mensaje ="Dinero liquido:" width = "30%" color ='text.secondary' />
                  <Mensaje tipo ="h5" mensaje ={client.presupuesto} width = "100%" color ='text.secondary' fontWeight = 'bold'/>
                </Stack>
              </Box>
            </Stack>
            <Notificacion open={open} setOpen={setOpen} mensaje_notificacion={mensajeNotificacion} severity={severity}/>
        </Box>
    )
}
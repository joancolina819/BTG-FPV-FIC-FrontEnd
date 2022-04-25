import React from "react";
import { Stack,Button, Divider, Box} from "@mui/material";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import {get_fondos_propios,get_client,prepararDatosAction} from '../redux/fondoDuck'
import Notificacion from "./Notificacion";

export default function NavBar(){

    const dispatch = useDispatch()
    const client = useSelector(store=> store.fondos.client)

    const [open, setOpen] = React.useState(false);
    const [severity, setSeverity] = React.useState("info");
    const [mensajeNotificacion, setMensajeNotificacion] = React.useState("");

    const prepararDatos = () =>{
        dispatch(prepararDatosAction())
        dispatch(get_client())
        dispatch(get_fondos_propios(client["_id"]))
        setMensajeNotificacion("DATOS PREPARADOS CORRECTAMENTE")
        setSeverity("info")
        setOpen(true)
      }

    return(
        <Box sx={{
                width: "20%",
                height: "auto",
                backgroundColor: 'secondary.light',
                minWidth:100,
                border:2,
                borderRadius:2,
                borderColor: "primary.main",
            }}>
            <br/>
            <Stack spacing={1} divider={<Divider  />}  > 
                <Link to=""><Button sx={{ width: '100%' }} variant="contained">Home</Button></Link>
                <Link to="gestorfondos"><Button sx={{ width: '100%' }} variant="contained">Gestiona tus fondos</Button></Link>
                <Link to="historial"><Button sx={{ width: '100%' }} variant="contained">Historial de transacciones</Button></Link>
                <Button onClick={prepararDatos} sx={{ width: '100%' }} variant="contained">Preparar datos O corregir datos</Button>
            </Stack>
            <Notificacion open={open} setOpen={setOpen} mensaje_notificacion={mensajeNotificacion} severity={severity}/>
        </Box>

    )
}
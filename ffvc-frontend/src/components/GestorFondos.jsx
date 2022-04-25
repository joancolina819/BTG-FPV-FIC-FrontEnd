import React from "react";
import DataTable from "./DataTable";
import Notificacion from "./Notificacion";
import Mensaje from "./Mensaje";
import {useSelector, useDispatch} from 'react-redux'
import {get_fondos_propios, get_fondos, suscribirseAction,get_client,cancelacionAction} from '../redux/fondoDuck'
import { Divider, Stack,Button,Box } from "@mui/material";

export default function GestorFondos(){

    const columns = [
        { 
          field: 'id', 
          headerName: 'ID de fondo', 
          width: 150,
          description:"Identificador del fondo"
        },
        {
          field: 'nombre',
          headerName: 'Nombre',
          width: 350,
          description:"Nombre natural fondo"
        },
        {
          field: 'monto_minimo_vinculacion',
          headerName: 'Monto mínimo de vinculacion al fondo',
          width: 250,
          description:"Dinero minimo que debe tener el cliente para suscribirse al fondo"
        },
        {
          field: 'categoria',
          headerName: 'Categoria',
          width: 110,
          description:"Categoria del fondo (FPV: Fondo Voluntario de Pensión, FIC: Fondos de Inversíon Colectiva)"
        },
      ];

    const dispatch = useDispatch()
    const client = useSelector(store=> store.fondos.client)
  
    const myfondos=useSelector(store=> store.fondos.fondos_propios)
    const fondos=useSelector(store=> store.fondos.fondos)
    const mensaje=useSelector(store=> store.fondos.peticion_mensaje)

    const [my_fondos_select, set_my_fondos_select] = React.useState([]);
    const [all_fondos_select, set_all_fondos_select] = React.useState([]);

    const [open, setOpen] = React.useState(false);
    const [severity, setSeverity] = React.useState("info");
    const [mensajeNotificacion, setMensajeNotificacion] = React.useState("");

    const suscribirFondo = () =>{
      if(all_fondos_select.length===1){
        dispatch(suscribirseAction(client["_id"],all_fondos_select[0]))
        dispatch(get_client())
        dispatch(get_fondos_propios(client["_id"]))
        setMensajeNotificacion(mensaje)
        setSeverity("info")
        setOpen(true)
      }else{
        setMensajeNotificacion("Se debe seleccionar solo un fondo")
        setSeverity("error")
        setOpen(true)
      }
    }

    const cancelarFondo = () =>{
      if(my_fondos_select.length===1){
        dispatch(cancelacionAction(client["_id"],my_fondos_select[0]))
        dispatch(get_client())
        dispatch(get_fondos_propios(client["_id"]))
        setMensajeNotificacion(mensaje)
        setSeverity("info")
        setOpen(true)
      }else{
        setMensajeNotificacion("Se debe seleccionar solo un fondo")
        setSeverity("error")
        setOpen(true)
    }
    }
    
    React.useEffect(()=>{
      dispatch(get_fondos())
      dispatch(get_fondos_propios(client["_id"]))
    }, [dispatch]);

    return(
        <Box textAlign="center" sx={{border:2, p:2,borderRadius:2,borderColor: "primary.main", height: "auto", width: '100%' }}>
          <Stack spacing ={1}  >
            <Mensaje tipo = "h5" mensaje="Mis fondos vinculados"  color="primary.main" fontWeight="bold"/>
            <Divider/>
            <Stack spacing ={2} direction="row" >
              <DataTable  columns={columns} 
                          row={myfondos} 
                          minHeight={250} 
                          width="100%"
                          setFondo={set_my_fondos_select}
                          checkboxSelection={true}/>
              <Button sx={{  height:"100%" }}onClick={cancelarFondo} variant="contained">Cancelar fondo</Button>
            </Stack>
            
            <Mensaje tipo = "h5" mensaje="Todos los fondos disponibles"  color="primary.main" fontWeight="bold"/>
            <Divider/>
            <Stack spacing ={2} direction="row" >
              <DataTable  columns={columns} 
                          row={fondos} 
                          minHeight={250} 
                          width="100%"
                          setFondo={set_all_fondos_select}
                          checkboxSelection={true}/>
              <Button sx={{  height:"100%" }} onClick={suscribirFondo} variant="contained">Suscribirse a fondo</Button>
            </Stack>
          </Stack>
          <Notificacion open={open} setOpen={setOpen} mensaje_notificacion={mensajeNotificacion} severity={severity}/>
        </Box>
    )
}
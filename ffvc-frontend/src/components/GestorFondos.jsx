import React from "react";
import DataTable from "./DataTable";
import Notificacion from "./Notificacion";
import {useSelector, useDispatch} from 'react-redux'
import {get_fondos_propios, get_fondos, suscribirseAction,get_client,cancelacionAction} from '../redux/fondoDuck'
import Box from '@mui/material/Box';
import { Button} from "@mui/material";


export default function GestorFondos(){

    const columns = [
        { field: 'id', headerName: 'ID de fondo', width: 150 },
        {
          field: 'nombre',
          headerName: 'Nombre',
          width: 350,
        },
        {
          field: 'monto_minimo_vinculacion',
          headerName: 'nonto mínimo de vinculacion al fondo',
          width: 250,
        },
        {
          field: 'categoria',
          headerName: 'Categoria',
          width: 110,
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
      dispatch(suscribirseAction(client["_id"],all_fondos_select[0]))
      dispatch(get_client())
      dispatch(get_fondos_propios(client["_id"]))
      setMensajeNotificacion(mensaje)
      setSeverity("info")
      setOpen(true)
    }

    const cancelarFondo = () =>{
      dispatch(cancelacionAction(client["_id"],my_fondos_select[0]))
      dispatch(get_client())
      dispatch(get_fondos_propios(client["_id"]))
      setMensajeNotificacion(mensaje)
      setSeverity("info")
      setOpen(true)

    }

    
    React.useEffect(()=>{
      dispatch(get_fondos())
      dispatch(get_fondos_propios(client["_id"]))
    }, [dispatch]);

    return(
        <Box sx={{border:2, p:2,borderRadius:2,borderColor: "primary.main", height: "auto", width: 'auto' }}>
            <DataTable  columns={columns} 
                        row={myfondos} 
                        tipo="h5" 
                        mensaje="Fondos vinculados" 
                        color="primary.main" 
                        fontWeight="bold" 
                        minHeight={250} 
                        width={900}
                        setFondo={set_my_fondos_select}
                        checkboxSelection={true}/>
            <br />
            <Button onClick={cancelarFondo} variant="contained">Cancelar fondo</Button>
            <DataTable  columns={columns} 
                        row={fondos} tipo="h5" 
                        mensaje="Todos los fondos" 
                        color="primary.main" 
                        fontWeight="bold" 
                        minHeight={250} 
                        width={900}
                        setFondo={set_all_fondos_select}
                        checkboxSelection={true}/>
            <br />
            <Button onClick={suscribirFondo} variant="contained">Suscribirse a fondo</Button>
            <Notificacion open={open} setOpen={setOpen} mensaje_notificacion={mensajeNotificacion} severity={severity}/>
        </Box>
    )
}
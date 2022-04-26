import React from "react";
import DataTable from "./DataTable";
import Notificacion from "./Notificacion";
import Mensaje from "./Mensaje";
import {useSelector, useDispatch} from 'react-redux'
import {get_fondos_propios, get_fondos, suscribirseAction,get_client,cancelacionAction} from '../redux/fondoDuck'
import { Divider, Stack,Button,Box, TextField} from "@mui/material";

export default function GestorFondos(){

      const columns_myFondos = [
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
        {
          field: 'inversion_cliente',
          headerName: 'Inversioncliente',
          width: 110,
          description:"Inversion de cliente"
        },
      ];

      const columns_allFondos = [
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

    const [my_fondos_select, set_my_fondos_select] = React.useState([]);
    const [all_fondos_select, set_all_fondos_select] = React.useState([]);

    const [open, setOpen] = React.useState(false);
    const [severity, setSeverity] = React.useState("info");
    const [mensajeNotificacion, setMensajeNotificacion] = React.useState("");

    var inversion=0

    const suscribirFondo = () =>{
      if(
        inversion>client["presupuesto"]||
        client["presupuesto"]<fondos[all_fondos_select[0]-1]["monto_minimo_vinculacion"]||
        inversion<fondos[all_fondos_select[0]-1]["monto_minimo_vinculacion"])
        {
          setMensajeNotificacion("No tiene saldo disponible para vincularse al fondo "+fondos[all_fondos_select[0]-1]["nombre"])
          setSeverity("error")
          setOpen(true)
      }
      if(all_fondos_select.length!==1)
        {
          setMensajeNotificacion("Seleccion unicamente un fondo")
          setSeverity("error")
          setOpen(true)
      }
      if(all_fondos_select.length===1&&validarInversion()){
        dispatch(suscribirseAction(client["_id"],all_fondos_select[0],inversion))
        dispatch(get_client())
        dispatch(get_fondos_propios(client["_id"]))
        setMensajeNotificacion("Peticion realizada.")
        setSeverity("info")
        setOpen(true)
      }
    }

    const validarInversion=()=>{
        const montoMinimo=fondos[all_fondos_select[0]-1]["monto_minimo_vinculacion"]
        if(inversion<=client["presupuesto"]&&inversion>=montoMinimo){
          console.log("entro")
          return true
        }else{
          return false
        }
    }
    const cancelarFondo = () =>{
      if(my_fondos_select.length===1){
        dispatch(cancelacionAction(client["_id"],my_fondos_select[0],fondos[all_fondos_select[0]-1]["inversion_cliente"]))
        dispatch(get_client())
        dispatch(get_fondos_propios(client["_id"]))
        setMensajeNotificacion("peticion realizada")
        setSeverity("info")
        setOpen(true)
      }else{
        setMensajeNotificacion("Se debe seleccionar solo un fondo")
        setSeverity("error")
        setOpen(true)
    }
    }

    const handleChange =(event)=>{
      inversion = event.target.value
      console.log(inversion)
    }
    
    React.useEffect(()=>{
      dispatch(get_fondos())
      dispatch(get_fondos_propios(client["_id"]))
    }, [dispatch,client]);

    return(
        <Box textAlign="center" sx={{border:2, p:2,borderRadius:2,borderColor: "primary.main", height: "auto", width: '100%' }}>
          <Stack spacing ={1}  >
            <Mensaje tipo = "h5" mensaje="Mis fondos vinculados"  color="primary.main" fontWeight="bold"/>
            <Mensaje tipo = "h7" fontSize={12} mensaje="Por favor selecciona un fondo a la vez para la cancelacion"  color="primary.main" />
            <Divider/>
            <Stack spacing ={2} direction="row" >
              <DataTable  columns={columns_myFondos} 
                          row={myfondos} 
                          minHeight={250} 
                          width="100%"
                          setFondo={set_my_fondos_select}
                          checkboxSelection={true}/>
              <Button sx={{  height:"100%" }}onClick={cancelarFondo} variant="contained">Cancelar fondo</Button>
            </Stack>
            
            <Mensaje tipo = "h5" mensaje="Todos los fondos disponibles"  color="primary.main" fontWeight="bold"/>
            <Mensaje tipo = "h7" fontSize={12} mensaje="Por favor selecciona un fondo a la vez para la vinculacion"  color="primary.main" />
            <Divider/>
            <Stack spacing ={2} direction="row" >
              <DataTable  columns={columns_allFondos} 
                          row={fondos} 
                          minHeight={250} 
                          width="100%"
                          setFondo={set_all_fondos_select}
                          checkboxSelection={true}/>
              <Stack spacing ={2}>
                <Button sx={{  height:"15%" }} onClick={suscribirFondo} variant="contained">Suscribirse a fondo</Button>
                <TextField
                  id="outlined-number"
                  label="Inversion"
                  type="number"
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Stack>
            </Stack>
          </Stack>
          <Notificacion open={open} setOpen={setOpen} mensaje_notificacion={mensajeNotificacion} severity={severity}/>
        </Box>
    )
}
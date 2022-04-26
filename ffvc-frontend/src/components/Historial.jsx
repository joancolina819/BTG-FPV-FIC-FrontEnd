import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import {get_historial} from '../redux/fondoDuck'
import DataTable from "./DataTable";
import Mensaje from "./Mensaje";
import { Divider,Box } from "@mui/material";

export default function Historial(){

    const columns = [
        { 
          field: 'id', 
          headerName: 'ID de registro', 
          width: 150,
          description:"Identificador del registro del historial de transacciones"
        },
        {
          field: 'nombre',
          headerName: 'Nombre',
          width: 150,
          description:"Nombre del cliente que realizo la operacion"
        },
        {
          field: 'apellido',
          headerName: 'Apellido',
          width: 150,
          description:"Apellido del cliente que realizo la operacion"
        },
        {
          field: 'edad',
          headerName: 'Edad',
          width: 110,
          description:"Edad del cliente que realizo la operacion"
        },
        {
          field: 'hora de transaccion',
          headerName: 'Hora de transaccion',
          width: 250,
          description:"Hora de realizacion de la transaccion"
        },
        {
          field: 'fondo',
          headerName: 'Fondo',
          width: 210,
          description:"Nombre del fondo natural asociado a la transaccion"
        },
        {
          field: 'tipo de transaccion',
          headerName: 'Tipo de transaccion',
          width: 170,
          description:"Puede tomar los valores de SUSCRIPCION O CANCELACION"
        },
        {
          field: 'inversion',
          headerName: 'Inversion',
          width: 170,
          description:"Inversion que realizo el cliente"
        },
      ];

    const historial = useSelector(store=> store.fondos.historial)

    const dispatch = useDispatch()

    React.useEffect(()=>{
        dispatch(get_historial())
    }, [dispatch]);

    return(
      <Box textAlign="center" sx={{border:2, p:2,borderRadius:2,borderColor: "primary.main",minHeight:550, height: "100%", width: '100%' }}>
        <Mensaje tipo = "h5" mensaje="Historial de transacciones"  color="primary.main" fontWeight="bold"/>
        <Divider/>
        <br />
        <DataTable  columns={columns} 
                  row={historial} 
                  minHeight={500} 
                  maxHeight={500} 
                  width="100%"
                  checkboxSelection={false}/>
      </Box>
    )
}
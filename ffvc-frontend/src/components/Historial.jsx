import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import {get_historial} from '../redux/fondoDuck'
import DataTable from "./DataTable";
import Box from '@mui/material/Box';

export default function Historial(){

    const columns = [
        { field: 'id', headerName: 'ID de registro', width: 150 },
        {
          field: 'nombre',
          headerName: 'Nombre',
          width: 150,
        },
        {
          field: 'apellido',
          headerName: 'Apellido',
          width: 150,
        },
        {
          field: 'edad',
          headerName: 'Edad',
          width: 110,
        },
        {
            field: 'hora de transaccion',
            headerName: 'Hora de transaccion',
            width: 250,
          },
          {
            field: 'fondo',
            headerName: 'Fondo',
            width: 210,
          },
          {
            field: 'tipo de transaccion',
            headerName: 'Tipo de transaccion',
            width: 170,
          },
      ];
      
    const historial = useSelector(store=> store.fondos.historial)

    const dispatch = useDispatch()

    React.useEffect(()=>{
        dispatch(get_historial())
    }, [dispatch]);

    return(
      <Box sx={{border:2, p:2,borderRadius:2,borderColor: "primary.main", height: "auto", width: 'auto' }}>
        <DataTable  columns={columns} 
                  row={historial} 
                  tipo="h5" 
                  mensaje="Historial de transacciones de los fondos" 
                  color="primary.main" 
                  fontWeight="bold" 
                  minHeight={400} 
                  width={1250}/>
      </Box>
    )
}
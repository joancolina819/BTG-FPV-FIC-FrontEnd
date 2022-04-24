import React from "react";
import { DataGrid, esES, GridToolbar } from '@mui/x-data-grid';
import Mensaje from "./Mensaje";
import { Divider } from "@mui/material";
import {useSelector, useDispatch} from 'react-redux'
import {get_historial} from '../redux/fondoDuck'

export default function Historial(){

    const columns = [
        { field: 'id', headerName: 'ID de registro', width: 150 },
        {
          field: 'Nombre',
          headerName: 'Nombre',
          width: 150,
        },
        {
          field: 'Apellido',
          headerName: 'Apellido',
          width: 150,
        },
        {
          field: 'Edad',
          headerName: 'Edad',
          width: 110,
        },
        {
            field: 'Hora de transaccion',
            headerName: 'Hora de transaccion',
            width: 200,
          },
          {
            field: 'Fondo',
            headerName: 'Fondo',
            width: 110,
          },
          {
            field: 'Tipo de transaccion',
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
        <div style={{ height: 400, width: '100%' }}>
            <br />
            <Mensaje tipo = "h5" mensaje ="Historial de transacciones de los fondos" color ="primary.light" fontWeight="bold"/>
            <br />
            <Divider/>
            <br />
            <DataGrid
                localeText={esES.components.MuiDataGrid.defaultProps.localeText}
                rows={historial}
                columns={columns}
                rowHeight={30}
                components={{ Toolbar: GridToolbar }} 
            />
        </div>
    )
}
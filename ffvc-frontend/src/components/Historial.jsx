import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import {get_historial} from '../redux/fondoDuck'
import DataTable from "./DataTable";

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
      <DataTable columns={columns} row={historial} tipo="h5" mensaje="Historial de transacciones de los fondos" color="primary.main" fontWeight="bold" minHeight={400} width="65%"/>
    )
}
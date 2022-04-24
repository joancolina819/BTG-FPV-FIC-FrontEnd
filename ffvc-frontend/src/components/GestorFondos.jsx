import React from "react";
import DataTable from "./DataTable";
import {useSelector, useDispatch} from 'react-redux'
import {get_fondos_propios, get_fondos} from '../redux/fondoDuck'
import Box from '@mui/material/Box';
import { Button } from "@mui/material";


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

    React.useEffect(()=>{
        console.log(client)
        dispatch(get_fondos())
        dispatch(get_fondos_propios(client["_id"]))
    }, [dispatch]);
  
    const myfondos=useSelector(store=> store.fondos.fondos_propios)
    const fondos=useSelector(store=> store.fondos.fondos)

    const [my_fondos_select, set_my_fondos_select] = React.useState([]);
    const [all_fondos_select, set_all_fondos_select] = React.useState([]);

    return(
        <Box sx={{ height: 400, width: '100%' }}>
            <DataTable  columns={columns} 
                        row={myfondos} 
                        tipo="h5" 
                        mensaje="Fondos vinculados" 
                        color="primary.main" 
                        fontWeight="bold" 
                        minHeight={300} 
                        width={900}
                        setFondos={set_my_fondos_select}/>
            <br />
            <Button variant="contained">Cancelar fondo</Button>
            <DataTable  columns={columns} 
                        row={fondos} tipo="h5" 
                        mensaje="Todos los fondos" 
                        color="primary.main" 
                        fontWeight="bold" 
                        minHeight={350} 
                        width={900}
                        setFondos={set_all_fondos_select}/>
            <br />
            <Button variant="contained">Suscribirse a fondo</Button>
        </Box>
    )
}
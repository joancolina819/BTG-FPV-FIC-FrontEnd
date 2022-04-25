import React from "react";
import { Box,Divider} from '@mui/material';
import {useSelector, useDispatch} from 'react-redux'
import {get_fondos_propios} from '../redux/fondoDuck'
import Mensaje from "./Mensaje";
import Graficas from "./Graficas";

export default function Home(){

    const dispatch = useDispatch()

    const client = useSelector(store=> store.fondos.client)
    const myfondos=useSelector(store=> store.fondos.fondos_propios)

    React.useEffect(()=>{
            dispatch(get_fondos_propios(client["_id"]))
          }, [dispatch,client]);

    return(
        <Box  textAlign="center"  sx={{border:2, p:2,borderRadius:2,borderColor: "primary.main", height: "auto", width: '100%' }}>
            <Mensaje tipo = "h4" mensaje ={"Bienvenido de regreso "+client.nombre+" "+client.apellido} color ="primary.main" fontWeight="bold"/>
            <Mensaje tipo = "h6" 
                mensaje ={
                myfondos.length>= 1  ?"A continuación se muestra graficas de tus inversiones": 
                "No existen datos para mostrar. Por favor suscribete a un fondo."}
                color ="primary.ligh" 
                fontWeight="bold"/>
            <Divider/>
            <br />
            <Graficas/>
        </Box>
    )
}
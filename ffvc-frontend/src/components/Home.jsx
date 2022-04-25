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

    const [dataBars, set_dataBars] = React.useState([]);


    const prepararDataBar =() =>{
        const dataAuxBars=[]

        for (let i = 0; i < myfondos.length; i++) {
            const barItemBars = {
                label:myfondos[i].nombre,
                value:myfondos[i].monto_minimo_vinculacion/8000,
                valueOrigin:myfondos[i].monto_minimo_vinculacion,
            }
            dataAuxBars.push(barItemBars)
        }
        set_dataBars(dataAuxBars)
    }

    React.useEffect(()=>{
            dispatch(get_fondos_propios(client["_id"]))
            prepararDataBar()
          }, [dispatch]);

    return(
        <Box px="30px" sx={{border:2, p:2,borderRadius:2,borderColor: "primary.main", height: "auto", width: '100%' }}>
            <Box textAlign="center" sx={{width: '95%'  }}>
                <Mensaje tipo = "h4" mensaje ={"Bienvenido de regreso "+client.nombre+" "+client.apellido} color ="primary.main" fontWeight="bold"/>
                <Mensaje tipo = "h6" mensaje ={dataBars.length>= 1  ?"A continuación se muestra graficas de tus inversiones": "No existen datos para mostrar. Por favor suscribete a un fondo."}color ="primary.ligh" fontWeight="bold"/>
            </Box>
            <Divider/>
            <br />
            <Graficas/>
        </Box>
    )
}
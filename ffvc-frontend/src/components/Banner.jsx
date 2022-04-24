import React from "react";
import Box from '@mui/material/Box';
import { Stack } from "@mui/material";
import Mensaje from "./Mensaje";
import {useSelector, useDispatch} from 'react-redux'
import {get_client} from '../redux/fondoDuck'
// import BTG_logo from '../assets/btg-portada.jpg'

export default function Banner(){

    const dispatch = useDispatch()
    const client = useSelector(store=> store.fondos.client)
    
    React.useEffect(()=>{
      dispatch(get_client())
    }, [dispatch]);

    return(
        <Box sx={{
            width: "full",
            height: 100,
            backgroundColor: 'primary.main',
          }} >
            <Stack spacing={2} direction="row"sx={{pl:50,pt:4}} >
              {/* <img src={BTG_logo}></img> */}
              <Mensaje tipo ="h5" mensaje ="Usuario:" width = "100%" color ='text.secondary' fontWeight = 'bold'/>
              <Mensaje tipo ="h6" mensaje ={client.nombre+" "+client.apellido} width = "100%" color ='text.secondary' />
              <Mensaje tipo ="h5" mensaje ="Dinero liquido:" width = "100%" color ='text.secondary' fontWeight = 'bold'/>
              <Mensaje tipo ="h6" mensaje ={client.presupuesto} width = "100%" color ='text.secondary' />
            </Stack>
            
        </Box>
    )
}
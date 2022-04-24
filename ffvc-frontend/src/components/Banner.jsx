import React from "react";
import Box from '@mui/material/Box';
import { Stack } from "@mui/material";
import Mensaje from "./Mensaje";
// import BTG_logo from '../assets/btg-portada.jpg'

export default function Banner(){

    return(
        <Box sx={{
            width: "full",
            height: 100,
            backgroundColor: 'primary.main',
          }} >
            <Stack spacing={2} direction="row"sx={{pl:50,pt:4}} >
              {/* <img src={BTG_logo}></img> */}
              <Mensaje tipo ="h5" mensaje ="Usuario:" width = "100%" color ='text.secondary' fontWeight = 'bold'/>
              <Mensaje tipo ="h6" mensaje ="Joan David Colina" width = "100%" color ='text.secondary' />
              <Mensaje tipo ="h5" mensaje ="Dinero liquido:" width = "100%" color ='text.secondary' fontWeight = 'bold'/>
              <Mensaje tipo ="h6" mensaje ="6.000.000" width = "100%" color ='text.secondary' />
            </Stack>
            
        </Box>
    )
}
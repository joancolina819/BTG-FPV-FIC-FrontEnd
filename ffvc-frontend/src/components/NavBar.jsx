import React from "react";
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import { Divider } from "@mui/material";
import {Link} from "react-router-dom";
export default function NavBar(){

    return(
        <Box sx={{
                width: 250,
                height: "100%",
                backgroundColor: 'secondary.light',
            }}>
            <br/>
            <Stack spacing={1} divider={<Divider  />}  > 
            <Link to=""><Button sx={{ width: '100%' }} variant="contained">Home</Button></Link>
            <Link to="gestorfondos"><Button sx={{ width: '100%' }} variant="contained">Gestiona tus fondos</Button></Link>
            <Link to="historial"><Button sx={{ width: '100%' }} variant="contained">Historial de transacciones</Button></Link>
            </Stack>
        </Box>

    )
}
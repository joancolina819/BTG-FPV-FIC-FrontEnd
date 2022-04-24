import React from "react";
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import { Divider } from "@mui/material";
import {Link} from "react-router-dom";
export default function NavBar(){

    return(
        <Box sx={{
                width: 150,
                height: 800,
                backgroundColor: 'secondary.light',
            }}>
            <br/>
            <Stack spacing={1} divider={<Divider  />}  > 
            <Link to="gestorfondos"><Button variant="contained">Gestiona tus fondos</Button></Link>
            <Link to="historial"><Button variant="contained">Historial de transacciones</Button></Link>
            </Stack>
        </Box>

    )
}
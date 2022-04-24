import React from "react";
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import { Divider } from "@mui/material";

export default function NavBar(){

    return(
        <Box sx={{
                width: 150,
                height: 3000,
                backgroundColor: 'secondary.light',
            }}>
            <br/>
            <Stack spacing={1} divider={<Divider  />}  > 
                <Button variant="contained">Gestiona tus fondos</Button>
                <Button variant="outlined">Historial de transacciones</Button>
            </Stack>
        </Box>

    )
}
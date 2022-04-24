import * as React from 'react';
import { Box, Stack} from '@mui/material';
import Mensaje from "./Mensaje";
import {useSelector} from 'react-redux'

export default function Home(){

    const client = useSelector(store=> store.fondos.client)

    return(
        <Box px="30px">
            <Stack>
                <Mensaje tipo = "h5" mensaje ={"Bienvenido de regreso "+client.nombre+" "+client.apellido} color ="primary.main" fontWeight="blod"/>

            </Stack>
        </Box>
    )
}
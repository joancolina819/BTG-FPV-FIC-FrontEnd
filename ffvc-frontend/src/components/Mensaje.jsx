import * as React from 'react';
import { Typography, Box } from '@mui/material';

export default function Mensaje(props){

    return(
        <Box sx={{height: "auto", width: props.width }}>
            <Typography
                variant={props.tipo}
                component = {'span'}
                gutterBottom
                align='justify'
                color={props.color}
                fontSize={props.fontSize}
                sx={{fontWeight: props.fontWeight}}
                >
                {props.mensaje}    
            </Typography>
        </Box>
    )
}
import * as React from 'react';
import { Typography } from '@mui/material';
// import { Box} from '@mui/material';


export default function Mensaje(props){

    return(
        <Typography
            variant={props.tipo}
            component = {'span'}
            gutterBottom
            align='justify'
            color={props.color}
            sx={{fontWeight: props.fontWeight}}
            >
            {props.mensaje}    
        </Typography>
    )
}
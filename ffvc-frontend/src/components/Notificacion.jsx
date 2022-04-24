import React from "react";
import { Alert, Snackbar } from "@mui/material";

export default function Notificacion(props){

    const handleClose = (event, reason) =>{
        if(reason==='clickaway'){
            return;
        }
        props.setOpen(false)
    }
    return(
        <Snackbar open={props.open} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} variant="filled" severity={props.severity} sx={{width:'100%'}}>
                {props.mensaje_notificacion}
            </Alert>
        </Snackbar>
    )
}
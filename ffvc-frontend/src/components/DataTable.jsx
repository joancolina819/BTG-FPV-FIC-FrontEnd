import React from "react";
import { DataGrid, esES, GridToolbar } from '@mui/x-data-grid';
import Mensaje from "./Mensaje";
import { Divider } from "@mui/material";

export default function DataTable(props){

    return(
        <div style={{ height: "auto", width: '100%' }}>
            <br />
            <Mensaje tipo = {props.tipo} mensaje ={props.mensaje} color ={props.color} fontWeight={props.fontWeight}/>
            <br />
            <Divider/>
            <br />
            <DataGrid
                localeText={esES.components.MuiDataGrid.defaultProps.localeText}
                rows={props.row}
                columns={props.columns}
                rowHeight={30}
                checkboxSelection
                onSelectionModelChange={(id)=>{
                    console.log(id)
                    props.setFondo(id);
                }}
                components={{ Toolbar: GridToolbar }} 
                sx={{minHeight:props.minHeight, width: props.width}}
            />
        </div>
    )
}
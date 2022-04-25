import React from "react";
import { DataGrid, esES, GridToolbar } from '@mui/x-data-grid';
import SinResultados from "./SinResultados";

export default function DataTable(props){

    return(
        <DataGrid
            localeText={esES.components.MuiDataGrid.defaultProps.localeText}
            rows={props.row}
            columns={props.columns}
            rowHeight={30}
            checkboxSelection = {props.checkboxSelection}
            density='compact'
            onSelectionModelChange={(id)=>{
                props.setFondo(id);
            }}
            components={{ 
                Toolbar: GridToolbar,
                NoRowsOverlay:SinResultados 
            }} 
            sx={{minHeight:props.minHeight, maxHeight:props.maxHeight, height:"100%", width: props.width}}
        />
    )
}
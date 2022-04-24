import React from "react";
import { Box, Stack} from '@mui/material';
import Mensaje from "./Mensaje";
import {useSelector} from 'react-redux'
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title
} from '@devexpress/dx-react-chart-material-ui';
import Bars from 'react-bars';


export default function Home(){

    const client = useSelector(store=> store.fondos.client)
    const data = [
        { argument:'Monday', value:10 },
        { argument:'Tuesday', value:40 },
        { argument:'Wednesday', value:10 },
        { argument:'Thursday', value:20 },
        { argument:'Friday', value:20 },
      ];
    
    const testData =[
          {label:'Javascript', value:85},
          {label:'C++', value: 82},
          {label:'React', value:80},
          {label:'Node.js', value:75},
          {label:'HTML5', value:72, barColor:'red'},
          {label:'CSS', value:68},
          {label:'JQuery', value:65},
          {label:'Bootstrap', value:60},
          {label:'Python', value:50},
          {label:'Angular.js', value:45},
        ]

    return(
        <Box px="30px" sx={{border:2, p:2,borderRadius:2,borderColor: "primary.main", height: "auto", width: 'auto' }}>
            <Stack>
                <Mensaje tipo = "h5" mensaje ={"Bienvenido de regreso "+client.nombre+" "+client.apellido} color ="primary.main" fontWeight="blod"/>
            </Stack>
            <Paper>
                <Chart
                data={data}
                >
                <PieSeries valueField="value" argumentField="argument" />
                <Title text="Inversiones por fondo"/>
                </Chart>
            </Paper>
            <Bars data={testData} makeUppercase={true}/>
        </Box>
    )
}
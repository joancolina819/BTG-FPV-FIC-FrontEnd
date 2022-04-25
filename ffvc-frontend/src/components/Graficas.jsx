import React from "react";
import { Box, Stack,Divider,Slide, Paper} from '@mui/material';
import {Chart,PieSeries,Title} from '@devexpress/dx-react-chart-material-ui';
import {Paper as PaperGrafica} from '@material-ui/core';
import Bars from 'react-bars';
import {useSelector, useDispatch} from 'react-redux'
import Mensaje from "./Mensaje";


export default function Graficas(){

    const dispatch = useDispatch()

    const myfondos=useSelector(store=> store.fondos.fondos_propios)

    const [dataBars, set_dataBars] = React.useState([]);

    const colores =["#42a5f5","#ff7043","#9ccc65","#ffca28"]
    const prepararDataBar =() =>{
        const dataAuxBars=[]
        
        for (let i = 0; i < myfondos.length; i++) {
            const barItemBars = {
                label:myfondos[i].nombre, 
                value:myfondos[i].monto_minimo_vinculacion/8000,
                valueOrigin:myfondos[i].monto_minimo_vinculacion,
            }
            dataAuxBars.push(barItemBars)
        }
        set_dataBars(dataAuxBars)
    }
      
    React.useEffect(()=>{
            prepararDataBar()
          }, [dispatch]);

    return(
        <Box px="30px" sx={{border:2, p:2,borderRadius:2,borderColor: "primary.main", height: "auto", width: 'auto' }}>
            <Stack spacing ={2} direction="row" divider={<Divider  orientation="vertical" flexItem />}>
                <Box textAlign="center" sx={{width: '60%'  }}>
                    <PaperGrafica>
                        <Chart data={dataBars}> 
                        <PieSeries valueField="value" argumentField="label" />
                        <Title text="Inversiones por fondo"/>
                        </Chart>
                    </PaperGrafica>
                </Box>

                <Stack spacing ={2} direction="row" >
                    <Box sx={{width: '100%'  }}>
                        <Mensaje tipo = "h5" mensaje ="Inversiones por fondo"color ="text.primary" />
                        <br />
                        <Bars data={dataBars} makeUppercase={true}/>
                    </Box>
                    <Box >
                        <br />
                        <br />
                        <br />         
                        {dataBars.length>= 1  ? <Mensaje fontSize = {25} tipo = "h7" mensaje ={dataBars[0].valueOrigin}  fontWeight="bold"/>: ""}
                        <br />
                        <br />
                        <br />
                        {dataBars.length>= 2  ? <Mensaje fontSize = {25} tipo = "h7" mensaje ={dataBars[1].valueOrigin}  fontWeight="bold"/>: ""}
                        <br />
                        <br />
                        <br />
                        <br />
                        {dataBars.length>= 3  ? <Mensaje fontSize = {25} tipo = "h7" mensaje ={dataBars[2].valueOrigin}  fontWeight="bold"/>: ""}
                        <br />
                        <br />
                        <br />
                        {dataBars.length>= 4  ? <Mensaje fontSize = {25} tipo = "h7" mensaje ={dataBars[3].valueOrigin}  fontWeight="bold"/>: ""}
                    </Box>
                </Stack>
            </Stack>
            
            <Stack spacing ={2} direction="row" divider={<Divider  orientation="vertical" flexItem />}>
                <Box textAlign="center" sx={{width: '60%'  }}>
                    <Stack spacing ={1} >
                        {dataBars.length>= 1  ? <Mensaje  fontSize = {22} tipo = "h7" mensaje ={dataBars[0].label+": "+dataBars[0].valueOrigin} color ={colores[0]} fontWeight="bold"/>: ""}
                        {dataBars.length>= 2  ? <Mensaje  fontSize = {22} tipo = "h7" mensaje ={dataBars[1].label+": "+dataBars[1].valueOrigin} color ={colores[1]} fontWeight="bold"/>: ""}
                        {dataBars.length>= 3  ? <Mensaje  fontSize = {22} tipo = "h7" mensaje ={dataBars[2].label+": "+dataBars[2].valueOrigin} color ={colores[2]} fontWeight="bold"/>: ""}
                        {dataBars.length>= 4  ? <Mensaje  fontSize = {22} tipo = "h7" mensaje ={dataBars[3].label+": "+dataBars[3].valueOrigin} color ={colores[3]} fontWeight="bold"/>: ""}
                    </Stack>
                </Box>
                <Box sx={{width: '20%'  }}/>
            </Stack>
        </Box>
    )
}
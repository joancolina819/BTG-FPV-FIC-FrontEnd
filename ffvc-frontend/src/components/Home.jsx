import React from "react";
import { Box, Stack} from '@mui/material';
import Mensaje from "./Mensaje";
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title
} from '@devexpress/dx-react-chart-material-ui';
import Bars from 'react-bars';
import {useSelector, useDispatch} from 'react-redux'
import {get_fondos_propios,} from '../redux/fondoDuck'

export default function Home(){

    const dispatch = useDispatch()

    const client = useSelector(store=> store.fondos.client)
    const myfondos=useSelector(store=> store.fondos.fondos_propios)

    const [dataBars, set_dataBars] = React.useState([]);
    const [dataPaper, set_dataPaper] = React.useState([]);

    const prepararDataBar =() =>{
        const dataAuxBars=[]
        const dataAuxPaper=[]
         for (let i = 0; i < myfondos.length; i++) {
            const barItemBars = {label:myfondos[i].nombre, value:myfondos[i].monto_minimo_vinculacion/10000}
            dataAuxBars.push(barItemBars)

            const barItemPaper = {argument:myfondos[i].nombre, value:myfondos[i].monto_minimo_vinculacion/10000}
            dataAuxPaper.push(barItemPaper)

        }
        set_dataPaper(dataAuxPaper)
        set_dataBars(dataAuxBars)
    }

    React.useEffect(()=>{
            dispatch(get_fondos_propios(client["_id"]))
            prepararDataBar()
          }, [dispatch]);

    return(
        <Box px="30px" sx={{border:2, p:2,borderRadius:2,borderColor: "primary.main", height: "auto", width: 'auto' }}>
            <Stack>
                <Mensaje tipo = "h5" mensaje ={"Bienvenido de regreso "+client.nombre+" "+client.apellido} color ="primary.main" fontWeight="blod"/>
                <Paper>
                    <Chart
                    data={dataPaper}
                    >
                    <PieSeries valueField="value" argumentField="argument" />
                    <Title text="Inversiones por fondo"/>
                    </Chart>
                </Paper>
                <br/>
                <Bars data={dataBars} makeUppercase={true}/>
            </Stack>
        </Box>
    )
}
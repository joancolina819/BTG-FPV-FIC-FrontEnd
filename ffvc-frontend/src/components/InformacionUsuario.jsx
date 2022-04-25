import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Mensaje from "./Mensaje";
import {useSelector} from 'react-redux'

export default function InformacionUsuario() {

    const [state, setState] = React.useState({
        right: false,
    });
    const client = useSelector(store=> store.fondos.client)
    const dataUser=[
        "Nombre del cliente:"+client.nombre, 
        "Apellido del cliente:"+client.apellido, 
        "Correo Electronico: "+client.correoElectronico,
        "Edad del cliente: "+client.edad, 
        "Dinero del cliente: "+client.presupuesto,
        "Identificacion del cliente: "+client.identifcacion]

    const toggleDrawer =(anchor, open) =>(event: React.KeyboardEvent | React.MouseEvent) => {
      setState({ ...state, [anchor]: open });
    };

    return (
        <React.Fragment >
            <Button onClick={toggleDrawer('right', true)}>
                <Mensaje tipo ="h6" fontSize = {10} mensaje ="Mas informacion" width = "auto" color ='text.secondary' />
            </Button>
            <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
            >
                <Box role="presentation" onClick={toggleDrawer('right', false)} onKeyDown={toggleDrawer('right', false)}>
                    <List>
                        {dataUser.map((text) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </React.Fragment>
    );
}
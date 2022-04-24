import axios from 'axios'


//################################## CONSTANTES DE REDUX ##########################
const data_inicial={
    fondos : [],
    historial: [
        { id: 1, Apellido: 'Snow', "Nombre": 'Jon', Edad: 35 , "Hora de transaccion": "13:05:33", "Fondo": "Liquidez", "Tipo de transaccion": "Cancelacion"},
        { id: 2, Apellido: 'Lannister', "Nombre": 'Cersei', Edad: 42, "Hora de transaccion": "13:05:33", "Fondo": "Liquidez", "Tipo de transaccion": "Cancelacion" },
        { id: 3, Apellido: 'Lannister', "Nombre": 'Jaime', Edad: 45, "Hora de transaccion": "13:05:33", "Fondo": "Liquidez", "Tipo de transaccion": "Cancelacion" },
        { id: 4, Apellido: 'Stark', "Nombre": 'Arya', Edad: 16, "Hora de transaccion": "13:05:33", "Fondo": "Liquidez", "Tipo de transaccion": "Cancelacion" },
        { id: 5, Apellido: 'Targaryen', "Nombre": 'Daenerys', Edad: null, "Hora de transaccion": "13:05:33", "Fondo": "Liquidez", "Tipo de transaccion": "Cancelacion" },
        { id: 6, Apellido: 'Melisandre', "Nombre": null, Edad: 150, "Hora de transaccion": "13:05:33", "Fondo": "Liquidez", "Tipo de transaccion": "Cancelacion" },
        { id: 7, Apellido: 'Clifford', "Nombre": 'Ferrara', Edad: 44, "Hora de transaccion": "13:05:33", "Fondo": "Liquidez", "Tipo de transaccion": "Cancelacion" },
        { id: 8, Apellido: 'Frances', "Nombre": 'Rossini', Edad: 36, "Hora de transaccion": "13:05:33", "Fondo": "Liquidez", "Tipo de transaccion": "Cancelacion" },
        { id: 9, Apellido: 'Roxie', "Nombre": 'Harvey', Edad: 65, "Hora de transaccion": "13:05:33", "Fondo": "Liquidez", "Tipo de transaccion": "Cancelacion" },
      ],
    fondos_propios: [
        { id: 1, nombre: "test",'Monto mínimo de vinculacion al fondo':"test", Categoria:"test"}
    ],
}

//################################## TIPOS DE ACCIONES ######################333
const GET_FONDOS = 'GET_FONDOS'
const GET_HISTORIAL = 'GET_HISTORIAL'
const GET_FONDOS_PROPIOS = 'GET_FONDOS_PROPIOS'


//################################### REDUCER #########################33
export default function fondoReducer(state= data_inicial, action){
    // console.log(action.payload)
    switch(action.type){
        case GET_FONDOS:
            return {...state, fondos: action.payload}
        case GET_HISTORIAL:
            return {...state, historial: action.payload}
        case GET_FONDOS_PROPIOS:
            return {...state, fondos_propios: action.payload}
        default:
            return state
    }
}

//################################ ACCIONES ################################
export const get_fondos=()=> async (dispatch, getState) =>{

    try{
        axios.get("http://127.0.0.1:8000/2FVC/fondos")
        .then((response)=>{
            console.log(response["data"])
            dispatch({
                type: GET_FONDOS,
                payload: response["data"]
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }catch(error){
        console.log(error)
    }
}

export const get_fondos_propios=()=> async (dispatch, getState) =>{

    try{
        axios.get("http://127.0.0.1:8000/2FVC/myfondos")
        .then((response)=>{
            dispatch({
                type: GET_FONDOS_PROPIOS,
                payload: response["data"]
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }catch(error){
        console.log(error)
    }
}

export const get_historial=()=> async (dispatch, getState) =>{

    try{
        axios.get("http://127.0.0.1:8000/2FVC/historial")
        .then((response)=>{
            dispatch({
                type: GET_FONDOS,
                payload: response["data"]
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }catch(error){
        console.log(error)
    }
}
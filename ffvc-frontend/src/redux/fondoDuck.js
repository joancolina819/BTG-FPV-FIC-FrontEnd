import axios from 'axios'


//################################## CONSTANTES DE REDUX ##########################
const data_inicial={
    client:{},
    fondos : [],
    historial: [],
    fondos_propios: [],
    peticion_mensaje:[]
}

//################################## TIPOS DE ACCIONES ######################333
const GET_FONDOS = 'GET_FONDOS'
const GET_HISTORIAL = 'GET_HISTORIAL'
const GET_FONDOS_PROPIOS = 'GET_FONDOS_PROPIOS'
const GET_CLIENT = 'GET_CLIENT'
const PETICION_MENSAJE = 'PETICION_MENSAJE'



//################################### REDUCER #########################33
export default function fondoReducer(state= data_inicial, action){
    switch(action.type){
        case GET_FONDOS:
            return {...state, fondos: action.payload}
        case GET_HISTORIAL:
            return {...state, historial: action.payload}
        case GET_FONDOS_PROPIOS:
            return {...state, fondos_propios: action.payload}
        case GET_CLIENT:
            return {...state, client: action.payload}
        case PETICION_MENSAJE:
            return {...state, peticion_mensaje: action.payload}
        default:
            return state
    }
}

//################################ ACCIONES ################################
export const get_fondos=()=> async (dispatch, getState) =>{

    try{
        axios.get("http://127.0.0.1:8000/2FVC/fondos")
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

export const get_fondos_propios=(id_client)=> async (dispatch, getState) =>{
    try{
        axios.get("http://127.0.0.1:8000/2FVC/myfondos?id_client="+id_client)
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
                type: GET_HISTORIAL,
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

export const get_client=()=> async (dispatch, getState) =>{

    try{
        axios.get("http://127.0.0.1:8000/2FVC/usuario")
        .then((response)=>{
            dispatch({
                type: GET_CLIENT,
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

export const suscribirseAction=(id_client, id_fondo)=> async (dispatch, getState) =>{

    try{            
        axios.post("http://127.0.0.1:8000/2FVC/suscripcion?id_client="+id_client+"&id_fondo="+id_fondo)
        .then((response)=>{
            console.log(response["data"])
            dispatch({
                type: PETICION_MENSAJE,
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

export const cancelacionAction=(id_client, id_fondo)=> async (dispatch, getState) =>{

    try{            
        axios.post("http://127.0.0.1:8000/2FVC/cancelacion?id_client="+id_client+"&id_fondo="+id_fondo)
        .then((response)=>{
            dispatch({
                type: PETICION_MENSAJE,
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
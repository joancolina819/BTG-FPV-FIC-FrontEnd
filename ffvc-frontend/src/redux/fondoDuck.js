import axios from 'axios'


//################################## CONSTANTES DE REDUX ##########################
const data_inicial={
    fondos : []
}

//################################## TIPOS DE ACCIONES ######################333
const GET_FONDOS = 'GET_FONDOS'


//################################### REDUCER #########################33
export default function fondoReducer(state= data_inicial, action){
    console.log(action.payload)
    switch(action.type){
        case GET_FONDOS:
            return {...state, fondos: action.payload}
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
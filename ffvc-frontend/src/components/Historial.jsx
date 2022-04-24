import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_fondos } from "../redux/fondoDuck";

export default function Historial(){

    const dispatch = useDispatch()

    const fondos = useSelector(store => store.fondos.fondos)

    React.useEffect(()=>{
        dispatch(get_fondos())
    }, [dispatch]);


    return(
        <h1>Titulo del Historial </h1>
    )
}
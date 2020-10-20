import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // EL 2do parametro es un arreglo de dependecia, con eso el UseEffect se dispara solo una vez
    // Solamente quiero que se ejecute la funcion getFigfs cuando el componente es renderizado por 1era vez
    // Si la categoria cambia va a volver ejecutar ese efectos
    // Los efectos no pueden ser async
    useEffect( () => {
        // Aqui ejecuto la peticion http
        getGifs( category )
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                })
            })
    }, [category]);

    return state; // { data:[], loading: true };
}
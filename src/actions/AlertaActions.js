import { MOSTRAR_ALERTA , OCULTAR_ALERTA} from '../types/index'

export const mostrarAlerta=(msg,categoria)=>{
    return async (dispatch)=>{
        dispatch(mostartAlertaAction(msg,categoria));

        setTimeout(()=>{
            dispatch(ocultarAlertaAction())
        },2000)}
}

export const mostartAlertaAction=(msg,categoria)=>({
    type:MOSTRAR_ALERTA,
    payload:{
        msg,
        categoria
    }})

export const ocultarAlertaAction=()=>({
    type:OCULTAR_ALERTA
})
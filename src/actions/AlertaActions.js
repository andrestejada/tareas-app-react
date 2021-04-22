import { MOSTRAR_ALERTA , OCULTAR_ALERTA} from '../types/index'

export const mostrarAlerta=(msg,categoria)=>{
    return (dispatch)=>{
        dispatch({type:MOSTRAR_ALERTA,
                payload:{
                    msg,
                    categoria
                }});

        setTimeout(()=>{
            dispatch({
                type:OCULTAR_ALERTA
            })
        },2000)
        }
}
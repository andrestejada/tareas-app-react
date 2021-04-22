import { MOSTRAR_ALERTA , OCULTAR_ALERTA} from '../types/index'

const initialState={
    alerta:null
}

export const AlertaReducer =(state=initialState,action)=>{
    switch (action.type) {
        case MOSTRAR_ALERTA:
            return{
                alerta:action.payload
            }
        case OCULTAR_ALERTA:
            return{
                alerta:null
            }
    
        default:
            return state
    }
}
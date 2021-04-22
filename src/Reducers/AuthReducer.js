import { REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION,} from '../types/index';

const initialState={
    token: localStorage.getItem('token'),
    autenticado:null,
    usuario:null,
    mensaje:null,
    cargando:true
}

export const AuthReducer=(state=initialState,action)=>{
    switch (action.type) {
        case REGISTRO_EXITOSO:
        case LOGIN_EXITOSO:
            localStorage.setItem('token',action.payload.token)
            return{
                ...state,
                autenticado:true,
                mensaje:null,
                cargando:false,
                token: action.payload.token
            };
        case REGISTRO_ERROR:
        case LOGIN_ERROR:
        case CERRAR_SESION:
            localStorage.removeItem('token');
            return{
                ...state,
                token:null,
                mensaje: action.payload,
                autenticado:null,
                usuario:null,
                cargando:false
            }
        case OBTENER_USUARIO:{
            return{
                ...state,
                usuario:action.payload,
                autenticado:true,
                cargando:false
            }
        }
    
        default:
            return state;
    }
}
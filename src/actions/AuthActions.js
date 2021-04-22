import clienteAxios from '../config/axios';
import tokenAuth from '../config/token';

import { REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION,} from '../types/index';

export const registrarUsuario=(datos)=>{
    return async (dispatch)=>{
        try {

            const resp = await clienteAxios.post('/api/usuarios',datos);
            
            dispatch(resgistroExitoso(resp.data))
            usuarioAutenticado()
        } catch (error) {
            const alerta = {
                msg: error.response.data.msg,
                categoria:'alerta-error'
            }
            dispatch(resgistroError(alerta))
        }
       
    }
}

export const resgistroExitoso=(resp)=>({
    type:REGISTRO_EXITOSO,
    payload:resp
})
export const resgistroError=(alerta)=>({
    type:REGISTRO_ERROR,
    payload:alerta
})


export const usuarioAutenticado=()=>{
    return async(dispatch)=>{

        const token = localStorage.getItem('token');

        if(token){
            tokenAuth(token)
        }

        try {
            const resp = await clienteAxios.get('/api/auth');
            console.log(resp)
            dispatch( obtenerUsuario(resp.data.usuario) ) 
            
        } catch (error) {
         
            console.log(error.response)
        }
    }
}

export const loginError=(alerta)=>({
    type:LOGIN_ERROR,
    payload: alerta
})

export const obtenerUsuario=(resp)=>({
    type:OBTENER_USUARIO,
    payload:resp
})


export const iniciarSesion=(datos)=>{
    return async (dispatch)=>{
        try {
            const resp = await clienteAxios.post('/api/auth',datos);
            dispatch(loginExitoso(resp.data ))  
        } catch (error) {
            const alerta = {
                msg: error.response.data.msg,
                categoria:'alerta-error'
            }
            dispatch( loginError(alerta))
            console.log(error.response)
        }
    }   
}

export const loginExitoso=(resp)=>({
    type:LOGIN_EXITOSO,
    payload: resp
})

export const cerrarSesionAction=()=>({
    type:CERRAR_SESION
})
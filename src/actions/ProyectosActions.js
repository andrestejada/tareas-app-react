import clienteAxios from '../config/axios'
import {FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO,
    PROYECTO_ERROR,} from '../types'


export const mostrarFormulario=()=>({
    type:FORMULARIO_PROYECTO
})


export const ObtenerProyectos=()=>{
    return async (dispatch)=>{
        try {
            const resp = await clienteAxios.get('/api/proyectos')
            dispatch( ObtenerProyectosAction(resp.data.proyectos) )
        } catch (error) {
            const alerta ={
                msg: error.response.data,
                categoria:'alerta-error'
            };
            dispatch( proyectoError(alerta) )
        }
    }
}

export const ObtenerProyectosAction=(proyectos)=>({
    type:OBTENER_PROYECTOS,
    payload:proyectos
})




export const agregarProyecto=(proyecto)=>{
    return async(dispatch)=>{
       try {
        const resp = await clienteAxios.post('/api/proyectos',proyecto)
        console.log(resp.data)
        dispatch( agregarProyectoAction(resp.data) )
       } catch (error) {
           console.log(error.response)
           const alerta ={
            msg: error.response.data,
            categoria:'alerta-error'
            };
            dispatch( proyectoError(alerta) )
       }
    }
   
}

export const agregarProyectoAction=(proyecto)=>({
    type:AGREGAR_PROYECTO, 
    payload:proyecto
})
export const mostrarError=()=>({
    type:VALIDAR_FORMULARIO
})

export const ProyectoActual=(proyectoId)=>({
    type:PROYECTO_ACTUAL,
    payload:proyectoId
})

export const EliminarProyecto=(id)=>{
    return async(dispatch)=>{

        try {
            await clienteAxios.delete(`/api/proyectos/${id}`)
            dispatch(EliminarProyectoAction(id))
        } catch (error) {
            console.log(error.response)
            const alerta ={
                msg: error.response.data,
                categoria:'alerta-error'
            };
            dispatch( proyectoError(alerta) )
        }
    }
}


export const EliminarProyectoAction=(id)=>({
    type:ELIMINAR_PROYECTO,
    payload: id
})

export const proyectoError=(alerta)=>({
    type:PROYECTO_ERROR,
    payload:alerta
})

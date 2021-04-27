
import clienteAxios from '../config/axios'
import {TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA,} from '../types/index'

export const obtenerTareas=(proyecto)=>{
    return async(dispatch)=>{
        const resp = await clienteAxios.get('/api/tareas',{params:{proyecto}})
        dispatch(obtenerTareasAction(resp.data.tareas) )
    }
}

export const obtenerTareasAction=(proyectoId)=>({
    type:TAREAS_PROYECTO,
    payload:proyectoId
})

export const agregarTarea=(tarea)=>{
    return async (dispatch)=>{
        try {
            const resp = await clienteAxios.post('/api/tareas',tarea)
            dispatch( agregarTareaAction(resp.data.tarea) )
        } catch (error) {
            
        }
    }
}

export const agregarTareaAction=(tarea)=>({
    type:AGREGAR_TAREA,
    payload: tarea
    })

export const validarTarea=()=>({
    type:VALIDAR_TAREA
})

export const eliminarTarea=(id,proyecto)=>{
    return async(dispatch)=>{
        await clienteAxios.delete(`/api/tareas/${id}`,{params:{proyecto}})
        dispatch(eliminarTareaAction(id))
    }
}

export const eliminarTareaAction=(id)=>({
    type:ELIMINAR_TAREA,
    payload:id
})

export const ActualizarTarea=(tarea)=>{
    return  async(dispatch)=>{
        try {
            const resp = await clienteAxios.put(`/api/tareas/${tarea._id}`,tarea)
            dispatch(ActualizarTareaAction(resp.data.tarea))
        } catch (error) {
            console.log(error.response)
        }
    }
}


export const ActualizarTareaAction=(tarea)=>({
    type:ACTUALIZAR_TAREA,
    payload:tarea
})

export const guardarTareaActual=(tarea)=>({
    type:TAREA_ACTUAL,
    payload:tarea
})
export const limpiarTarea=()=>({
    type:LIMPIAR_TAREA
})
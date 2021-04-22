import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActualizarTarea, eliminarTarea, guardarTareaActual, obtenerTareas } from '../../actions/TareasActions';


const Tarea = ({tarea}) => {
    const {proyecto} = useSelector(state => state.proyectos)
    const dispatch = useDispatch()
    //Extraer datos del state iniacial
    
   

    //eliminar la tarea de el proyecto
    const onclickEliminar = id =>{
       dispatch( eliminarTarea(id,proyecto[0]._id) )
       dispatch( obtenerTareas(proyecto[0]._id) )
    }
    //cambia el estado de la tarea
    const CambiarEstado = tarea =>{
        if(tarea.estado) {
            tarea.estado = false;
        } else {
            tarea.estado = true
        }
        dispatch( ActualizarTarea(tarea) )
    }
    //seleccione la tarea actual
    const tareaSeleccionada = tarea =>{
      dispatch( guardarTareaActual(tarea) )
    }

    return ( 
        <li className='tarea sombra animate__animated animate__fadeIn animate__faster'>
            <p>{tarea.nombre}</p>
            <div className='estado' >
                { tarea.estado
                ? 
                    (
                        <button 
                            className='completo'
                            type='button'
                            onClick={()=> CambiarEstado(tarea) }
                        >Completo</button>
                    )
                : 
                    (
                        <button 
                            className='incompleto'
                            type='button'
                            onClick={()=> CambiarEstado(tarea) }
                        >Incompleto</button>
                    )
                
                }
            </div>
            <div className='acciones'>
                <button 
                    type='button'
                    className='btn btn-primario'
                    onClick={ ()=> tareaSeleccionada(tarea)}
                >Editar</button>
                <button 
                    type='button'
                    className='btn btn-secundario'
                    onClick={()=>onclickEliminar(tarea._id) }
                >Eliminar</button>
            </div>
        </li>
     );
}
 
export default Tarea;
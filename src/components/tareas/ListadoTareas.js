import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EliminarProyecto } from '../../actions/ProyectosActions'
import Tarea from './Tarea'

const ListadoTareas = () => {

    
    const {proyecto} = useSelector(state => state.proyectos)
    const {tareasProyecto} = useSelector(state => state.tareas)
    const dispatch = useDispatch()
    // Si no hay proyecto seleccionado
    if(!proyecto) return <h2>Selecciona un proyecto</h2>;
    
        
     const [proyectoActual] = proyecto

    const onClickEliminar=()=>{
        dispatch( EliminarProyecto(proyectoActual._id) )
    }
    return (
        <>
         <h2>Proyecto:{proyectoActual.nombre}</h2>
         <ul 
         className='listado-tareas'
         > {tareasProyecto.length === 0 
            ? (<li className="tarea"><p>No hay tareas</p></li>) 
            :  tareasProyecto.map(tarea => (
                    <Tarea 
                        key={tarea._id}
                        tarea={tarea}
                    />
            ))
        
        }

        </ul>
        <button     
                type="button"
                className="btn btn-eliminar"
                onClick={onClickEliminar}
        >Eliminar Proyecto &times;</button>   
        </>
    )
}

export default ListadoTareas

import React, { useEffect, useState } from 'react';  
import { useDispatch, useSelector } from 'react-redux';
import { ActualizarTarea, agregarTarea, limpiarTarea, obtenerTareas, validarTarea } from '../../actions/TareasActions';


const FormTarea = () => {
    const dispatch = useDispatch()
    
    const {proyecto} = useSelector(state => state.proyectos)
    const {errorTarea,tareaSeleccionada} = useSelector(state => state.tareas)
    //console.log(tareaSeleccionada)

     // Effect que detecta si hay una tarea seleccionada
     useEffect(() => {
        if(tareaSeleccionada !== null) {
            guardarTarea(tareaSeleccionada)
        } else {
            guardarTarea({
                nombre: ''
            })
        }
    }, [ tareaSeleccionada]); 

    // State del formulario
    const [tarea, guardarTarea] = useState({
        nombre: ''
    })

    // Si no hay proyecto seleccionado
    if(!proyecto) return null;
    
    const [proyectoActual] = proyecto


    // extraer el nombre del proyecto
    const { nombre } = tarea;

    // Si no hay proyecto seleccionado

     // Leer los valores del formulario
     const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
        // validar
        if(nombre.trim() === '' ) {
           dispatch( validarTarea() )
            return;
        }
       
        if(tareaSeleccionada===null){
            tarea.proyecto = proyectoActual._id
            dispatch( agregarTarea(tarea) );
           
        }else{
            dispatch( ActualizarTarea(tarea) )
            dispatch( limpiarTarea() )
        }
        dispatch( obtenerTareas(proyectoActual._id) )
        
        // reiniciar el form
        guardarTarea({
            nombre: ''
        })
    }


    return ( 
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={tareaSeleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
                    />
                </div>
            </form>

            {errorTarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null } 
        </div>
     );
}
 
export default FormTarea;
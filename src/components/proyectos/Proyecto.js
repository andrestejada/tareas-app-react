import React  from 'react';
import { useDispatch } from 'react-redux';
import {  ProyectoActual } from '../../actions/ProyectosActions';
import { obtenerTareas } from '../../actions/TareasActions';


const Proyecto = ({proyecto}) => {
    const dispatch = useDispatch()
    
    const seleccionarProyecto = id =>{
      
        dispatch( ProyectoActual(id) );       
        dispatch( obtenerTareas(id) );

    }

    return ( 
        <li className='animate__animated animate__fadeIn animate__faster' >
            <button 
                className='btn btn-blank'
                type='button'
                onClick={ ()=> seleccionarProyecto(proyecto._id) }
            >{proyecto.nombre}</button>
        </li>
     );
}
 
export default Proyecto;
 
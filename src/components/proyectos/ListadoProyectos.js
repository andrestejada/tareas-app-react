import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { mostrarAlerta } from '../../actions/AlertaActions'
import { ObtenerProyectos } from '../../actions/ProyectosActions'
import Proyecto from './Proyecto'

const ListadoProyectos = () => {
    const dispatch = useDispatch()
    const {proyectos, mensaje} = useSelector(state => state.proyectos)
    const {alerta} = useSelector(state => state.alerta)
    const {autenticado} = useSelector(state => state.auth)

    useEffect(() => {
        // si hay un error
        if(mensaje) {
           dispatch( mostrarAlerta(mensaje.msg, mensaje.categoria));
        } 
       
       if(autenticado){
        dispatch( ObtenerProyectos() );
       }
       // eslint-disable-next-line
    }, [ObtenerProyectos,mensaje])
    
    //revisar si poryectos tiene contenido
    if(proyectos.length ===0) return <p>No hay Proyectos, comienza creando uno.</p>
    return (
        <ul className='listado-proyectos animate__animated animate__fadeIn animate__faster'>
            { alerta   ? ( <div className={`alerta ${alerta.categoria} `}>{alerta.msg}</div>  ) : null  }
            {proyectos.map( proyecto=>( 
                
                <Proyecto
                    key={proyecto._id}
                    proyecto={proyecto}
                />
            ))}
        </ul>
    )
}

export default ListadoProyectos

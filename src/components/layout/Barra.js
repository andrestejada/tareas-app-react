import React from 'react';
import { cerrarSesionAction} from '../../actions/AuthActions'
import { useDispatch, useSelector } from 'react-redux';

const Barra = () => {
    const {usuario} = useSelector(state => state.auth)
    const dispatch = useDispatch();

    const cerrarSesion=()=>{
        dispatch( cerrarSesionAction() )
    }
    return (
        <header className="app-header">
        <p className="nombre-usuario">Hola <span>{ usuario==null ? 'usuario' : usuario.nombre }</span> </p> 
        

        <nav className="nav-principal">
            <button 
                className="btn btn-blank cerrar-sesion text-white"
                onClick={() => cerrarSesion() }
            >Cerrar Sesión</button>
        </nav>
    </header>
    )
}

export default Barra

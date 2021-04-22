import React ,{ useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { agregarProyecto, mostrarError, mostrarFormulario } from '../../actions/ProyectosActions';


const NuevoProyecto = () => {
    //Redux
    const {formulario , errorFormulario } = useSelector(state => state.proyectos);
    const dispatch = useDispatch();
    
    // State para Proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    });

    // Extraer nombre de proyecto
    const { nombre } = proyecto;

    // Lee los contenidos del input
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    const onClickFormulario=()=>{
        dispatch( mostrarFormulario() )
    }

    const onSubmitProyecto=(e)=>{
        e.preventDefault()
         // Validar el proyecto
         if(nombre === '') {
            dispatch( mostrarError() );
            return;
        }
        dispatch( agregarProyecto(proyecto) );

        // Reiniciar el form
        guardarProyecto({
            nombre: ''
        })
    }

    return (
        <>
        <button 
            type="button"
            className="btn btn-block btn-primario"
            onClick={ onClickFormulario }
        >Nuevo Proyecto</button>

        { formulario ? 
                (
                    <form
                        className="formulario-nuevo-proyecto"
                        onSubmit={onSubmitProyecto}
                    >
                        <input 
                            type="text"
                            className="input-text"
                            placeholder="Nombre Proyecto"
                            name="nombre"
                            value={nombre}
                            onChange={onChangeProyecto}
                        />

                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Agregar Proyecto"
                        />

                    </form>
            ) : null } 

        { errorFormulario ? <p className="mensaje error">El nombre del Proyecto es obligatorio</p>  : null } 
    </>
    )
}

export default NuevoProyecto

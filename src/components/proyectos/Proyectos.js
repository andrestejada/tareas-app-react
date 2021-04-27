import React, {  useEffect } from 'react';
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra';
import FormTarea from '../tareas/FormTarea';
import ListadoTareas from '../tareas/ListadoTareas';
import { useDispatch } from 'react-redux';
import { usuarioAutenticado } from '../../actions/AuthActions';
// import FormTarea from '../tareas/FormTarea';
// import ListadoTareas from '../tareas/ListadoTareas';


const Proyectos = () => {
    const dispatch = useDispatch()

    
    useEffect(() => {

        dispatch(usuarioAutenticado());
        // eslint-disable-next-line
    }, [])


    return ( 
        <div className="contenedor-app">
            <Sidebar />

            <div className="seccion-principal">
                <Barra />

                <main>
                    <FormTarea />

                    <div className="contenedor-tareas">
                        <ListadoTareas />
                    </div>
                </main>
            </div>
        </div>
     );
}


export default Proyectos;
 
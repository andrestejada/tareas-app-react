import React from 'react';
import { useSelector } from 'react-redux';
import { Route ,Redirect} from 'react-router-dom';



const RutaPublica = ({component:Component ,...props }) => {
    const {autenticado} = useSelector(state => state.auth)
    
    return (
      <Route {...props} render={ props=> ( autenticado )
        ? (<Redirect to='/proyectos' />) 
        : (<Component {...props} />) } />
    )
}

export default RutaPublica

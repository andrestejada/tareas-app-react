import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route ,Redirect} from 'react-router-dom';
import { usuarioAutenticado } from '../../actions/AuthActions';
import tokenAuth from '../../config/token';


const token = localStorage.getItem('token')
if(token){
  tokenAuth(token)
}


const RutaPrivada = ({component:Component ,...props }) => {
    const {autenticado} = useSelector(state => state.auth)
    const dispatch = useDispatch()

     useEffect(()=>{
       
        dispatch( usuarioAutenticado() )
     },[dispatch]);

    return (
      <Route {...props} render={ props=> (!autenticado )
        ? (<Redirect to='/' />) 
        : (<Component {...props} />) } />
    )
}

export default RutaPrivada

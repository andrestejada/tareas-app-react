import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Switch ,Redirect} from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';
import RutaPrivada from './components/routes/RutaPrivada';
import RutaPublica from './components/routes/RutaPublica';
import { store } from './store/store';

// const token = localStorage.getItem('token')
// if(token){
//   tokenAuth(token)
// }
function App() {
  return (
    <Provider store={store} >
      <Router basename='/' >
        <Switch>
            <RutaPublica exact path="/" component={Login} />
            <RutaPublica exact path="/nueva-cuenta" component={NuevaCuenta} />
            <RutaPrivada exact path="/proyectos" component={Proyectos} />
            <Redirect to='/'/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

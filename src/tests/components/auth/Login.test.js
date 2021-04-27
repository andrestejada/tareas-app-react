import React from 'react';
import {Provider} from 'react-redux'
import {mount, shallow} from 'enzyme'
import Login from '../../../components/auth/Login';
import {MemoryRouter} from 'react-router-dom'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { mostrarAlerta } from '../../../actions/AlertaActions';
import { iniciarSesion, usuarioAutenticado } from '../../../actions/AuthActions';

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

jest.mock('../../../actions/AlertaActions',()=>({
    mostrarAlerta : jest.fn(),
}))

jest.mock('../../../actions/AuthActions',()=>({
    iniciarSesion: jest.fn(),
    usuarioAutenticado: jest.fn()
}))

const initialState={
    alerta:{
        alerta:{
            msg:'',
            categoria:''
        }
    },
    auth: {
        token: null,
        autenticado: null,
        usuario: null,
        mensaje: null,
        cargando: true
      }
}

let store = mockStore(initialState);
store.dispatch = jest.fn();
let wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <Login/>
        </MemoryRouter>
    </Provider>
 )
 

describe('test component <Login/>', () => {
    beforeEach( ()=>{
        store = mockStore(initialState)
        jest.clearAllMocks
        store.dispatch = jest.fn();
        wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <Login/>
                </MemoryRouter>
            </Provider>
         )
    })
  
    test('should be put the value on the input email  ', () => {
        
        wrapper.find('#email').simulate('change',{target:{
            name:'email',
            value:'test@test.com'
        }})

        expect(wrapper.find('#email').props().value).toEqual('test@test.com')
        
    });
    test('should be put the value on the input password  ', () => {
        
        wrapper.find('#password').simulate('change',{target:{
            name:'password',
            value:'123456'
        }})

        expect(wrapper.find('#password').props().value).toEqual('123456')
        
    });
    test('test on onSubmit  ', () => {
        
        wrapper.find('form').prop('onSubmit')({ preventDefault(){} })

        expect(mostrarAlerta).toHaveBeenCalled()
        expect(mostrarAlerta).toHaveBeenCalledWith('Todos los campos son obligatorios', 'alerta-error')
    });
    test('test on onSubmit  ', () => {
        wrapper.find('#email').simulate('change',{target:{
            name:'email',
            value:'test@test.com'
        }});

        wrapper.find('#password').simulate('change',{target:{
            name:'password',
            value:'123456'
        }});

        wrapper.find('form').prop('onSubmit')({ preventDefault(){} })
        
        expect(iniciarSesion).toHaveBeenCalled()
        expect(iniciarSesion).toHaveBeenCalledWith({email:'test@test.com',password:'123456'})
        expect(usuarioAutenticado).toHaveBeenCalled();
    });



});
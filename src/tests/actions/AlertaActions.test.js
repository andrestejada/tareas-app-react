import { mostartAlertaAction, mostrarAlerta, ocultarAlertaAction } from '../../actions/AlertaActions';
import { MOSTRAR_ALERTA , OCULTAR_ALERTA} from '../../types/index'

import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'


const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const store = mockStore({})
 

describe('Test alertasActions', () => {
    test('should be match with the payload ', () => {
        const mostrartAletarTest = mostartAlertaAction('hubo un error','alerta-error');

        expect(mostrartAletarTest).toEqual({
            type:MOSTRAR_ALERTA,
            payload:{
                msg:'hubo un error',
                categoria:'alerta-error'
            }})
    });

    test('should be match with the payload', () => {
        const oculatarAlertaTest = ocultarAlertaAction();

        expect(oculatarAlertaTest).toEqual({type:OCULTAR_ALERTA})
    });

    test('should be called 2 action', async() => {

        await store.dispatch( mostrarAlerta('hubo un error','alerta-error') )

        const actions = store.getActions()
        expect(actions[0]).toMatchObject({
            type: 'MOSTRAR_ALERTA',
            payload: { msg: 'hubo un error', categoria: 'alerta-error' }
          })
    });


});
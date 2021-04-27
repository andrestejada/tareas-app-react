import { AlertaReducer } from '../../Reducers/AlertasReducer'
import { MOSTRAR_ALERTA , OCULTAR_ALERTA} from '../../types/index'


describe('Testing in alertaReducer', () => {
    const initialState={
        alerta:null
    }
    test('should be match with MOSTRAR_ALERTA', () => {
        const action={
            type:MOSTRAR_ALERTA,
            payload:{
                msg:'hubo un error',
                categoria:'alerta-error'
            }
        }
        const state = AlertaReducer(initialState,action)

        expect(state).toMatchObject(
            {alerta:{
                msg:'hubo un error',
                categoria:'alerta-error'
            }})
    });

    test('should be match with OCULTAR-ALERTA ', () => {
        const action={
            type:OCULTAR_ALERTA,
        }
        const state = AlertaReducer(initialState,action)

        expect(state).toEqual({alerta:null})
    });
})
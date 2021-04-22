import { combineReducers } from "redux";
import { AlertaReducer } from "./AlertasReducer";
import { AuthReducer } from "./AuthReducer";
import { ProyectosReducer } from "./ProyectosReducer";
import { TareasReducer } from "./TareasReducer";


export const reducers = combineReducers({
    proyectos: ProyectosReducer,
    tareas: TareasReducer,
    alerta: AlertaReducer,
    auth: AuthReducer
})
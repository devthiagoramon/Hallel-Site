
import {configureStore} from "@reduxjs/toolkit"

import userReducer from "../pages/Entrar/loginSlice"
import doacaoReducer from "../pages/DoacoesHallel/doacoesSlice"
import routeAdmReducer from '../components/BarraLateralAdm/barraLateralSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        doacao: doacaoReducer,
        routeAdm: routeAdmReducer,
    }
})
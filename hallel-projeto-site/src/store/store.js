
import {configureStore} from "@reduxjs/toolkit"

import userReducer from "../pages/Entrar/loginSlice"
import doacaoReducer from "../pages/DoacoesHallel/doacoesSlice"

export const store = configureStore({
    reducer: {
        user: userReducer,
        doacao: doacaoReducer,
    }
})
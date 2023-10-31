
import {configureStore} from "@reduxjs/toolkit"

import userReducer from "../pages/Entrar/loginSlice"

export const store = configureStore({
    reducer: {
        user: userReducer,
    }
})
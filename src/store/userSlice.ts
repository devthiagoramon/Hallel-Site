import { createSlice } from "@reduxjs/toolkit";
import { ReduxStore, ReduxUser } from "../types/reduxTypes";

const initialState: ReduxUser ={
    email: "",
    name: "",
    photo: "",
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    }
})

export const selectUserName = (state: ReduxStore) => state.user.name

export default userSlice.reducer;
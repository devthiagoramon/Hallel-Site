import { createSlice } from "@reduxjs/toolkit";
import { ReduxStore, ReduxUser } from "../types/reduxTypes";

const initialState: ReduxUser = {
  id: "",
  email: "",
  name: "",
  photo: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUserInfoRedux(state, action) {
      const { email, id, nome, imagem } = action.payload;
      state.email = email;
      state.id = id;
      state.name = nome;
      state.photo = imagem;
    },
  },
});

export const { saveUserInfoRedux } = userSlice.actions;

export const selectUserName = (state: ReduxStore) => state.user.name;
export const selectUserPhoto = (state: ReduxStore) =>
  state.user.photo;
export const selectUserId = (state: ReduxStore) => state.user.id;

export default userSlice.reducer;

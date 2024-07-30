import { createSlice } from "@reduxjs/toolkit";
import { ReduxStore, ReduxUser } from "../types/reduxTypes";

const initialState: ReduxUser = {
  id: "",
  email: "",
  name: "",
  photo: "",
  cpf: "",
  dataNascimento: "",
  telefone: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUserInfoRedux(state, action) {
      const {
        email,
        id,
        nome,
        image,
        cpf,
        dataNascimento,
        telefone,
      } = action.payload;
      state.email = email;
      state.id = id;
      state.name = nome;
      state.photo = image;
      state.cpf = cpf;
      state.dataNascimento = dataNascimento;
      state.telefone = telefone;
    },
    editUserPhotoRedux(state, action) {
      state.photo = action.payload;
    },
  },
});

export const { saveUserInfoRedux, editUserPhotoRedux } =
  userSlice.actions;

export const selectUserName = (state: ReduxStore) => state.user.name;
export const selectUserPhoto = (state: ReduxStore) =>
  state.user.photo;
export const selectUserId = (state: ReduxStore) => state.user.id;

export const selectUser = (state: ReduxStore) => state.user;

export default userSlice.reducer;

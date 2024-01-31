import { createSlice } from "@reduxjs/toolkit";

const initialStateSlice = {
  id:
    localStorage.getItem("idHallel") !== null
      ? localStorage.getItem("idHallel")
      : "",
  nome:
    localStorage.getItem("nomeHallel") !== null
      ? localStorage.getItem("nomeHallel")
      : "",
  email:
    localStorage.getItem("emailHallel") !== null
      ? localStorage.getItem("emailHallel")
      : "",
  roles:
    localStorage.getItem("rolesHallel") !== null
      ? localStorage.getItem("rolesHallel")
      : [],
  imagem:
    localStorage.getItem("imagemHallel") !== null
      ? localStorage.getItem("imagemHallel")
      : "",
  token:
    localStorage.getItem("tokenHallel") !== null
      ? localStorage.getItem("tokenHallel")
      : "",
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    ...initialStateSlice,
  },
  reducers: {
    loginSave(state, action) {
      const { id, nome, imagem, email, roles, token } = action.payload;
      state.id = id;
      state.imagem = imagem;
      state.nome = nome;
      state.email = email;
      state.roles = roles;
      state.token = token;
      localStorage.setItem("tokenHallel", token);
      localStorage.setItem("idHallel", id);
      localStorage.setItem("nomeHallel", nome);
      localStorage.setItem("emailHallel", email);
      localStorage.setItem("rolesHallel", roles);
      localStorage.setItem("imagemHallel", imagem);
    },
    atualizarToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const { loginSave, atualizarToken } = userSlice.actions;

export const selectToken = (state) => state.user.token;
export const selectUserInfo = (state) => {
  return { nome: state.user.nome, email: state.user.email };
};
export const selectRoles = (state) => state.user.roles;
export const selectIdUser = (state) => state.user.id;
export const selectInfosModalUser = (state) => {
  return { nome: state.user.nome, imagem: state.user.imagem };
};

export default userSlice.reducer;

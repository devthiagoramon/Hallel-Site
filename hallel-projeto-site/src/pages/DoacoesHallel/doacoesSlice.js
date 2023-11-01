import { createSlice } from "@reduxjs/toolkit";

const initialStates = {
  isMembro: false,
  idMembro: "",
  nomeDoacao: "",
  emailDoacao: "",
  numeroTelefoneDoacao: "",
  dataNascimentoDoacao: undefined,
  sexoDoacao: "",
  periodoDoacao: "",
  diaRenovacaoDoacao: undefined,
  valorDinheiroDoacao: 0,
  isDoacaoDinheiro: true,
  objetosDoacao: [],
  isDoacaoObjeto: false,
};

const doacaoSlice = createSlice({
  name: "doacao",
  initialState: { ...initialStates },
  reducers: {
    doacaoIsMembro(state, action) {
      const { id } = action.payload;
      state.idMembro = id;
      state.isMembro = true;
    },
    adicionarUser(state, action) {
      const { nome, email, numeroTelefone, dataNascimento, sexo } =
        action.payload;
      state.nome = nome;
      state.email = email;
      state.numeroTelefone = numeroTelefone;
      state.dataNascimento = dataNascimento;
      state.sexo = sexo;
    },
    resetarStateDoacao(state) {
      state = { ...initialStates };
    },
    definirDoacaoDinheiro(state, action) {
      const { periodo, diaRenovacao, valor } = action.payload;
      state.periodoDoacao = periodo;
      state.diaRenovacaoDoacao = diaRenovacao;
      state.valorDinheiroDoacao = valor;
    },
    definirDoacaoObjeto(state, action) {
      // a estrutura da doacao objeto é a seguinte
      /*
            {
                tipoItem: "",
                quantidade: 0
            }
        */
      const { objetos } = action.payload;
      state.objetosDoacao = [...objetos];
    },
    setarDoacaoObjeto(state) {
      state.isDoacaoObjeto = true;
      state.isDoacaoDinheiro = false;
    },
    setarDoacaoDinheiro(state) {
      state.isDoacaoObjeto = false;
      state.isDoacaoDinheiro = true;
    },
  },
});

export const { adicionarUser, doacaoIsMembro } = doacaoSlice.actions;

export const selectDoacaoUser = (state) => {
  return {
    nome: state.doacao.nomeDoacao,
    email: state.doacao.emailDoacao,
    numeroTelefone: state.doacao.numeroTelefone,
    dataNascimento: state.doacao.dataNascimentoDoacao,
    sexo: state.doacao.sexoDoacao,
  };
};
export const selectIsMembro = (state) => state.doacao.isMembro;
export const selectIdMembro = (state) => state.doacao.idMembro;
export const selectIsDoacaoDinheiro = (state) => state.doacao.isDoacaoDinheiro;
export const selectIsDoacaoObjeto = (state) => state.doacao.isDoacaoObjeto;
export const selectInfoDoacaoDinheiro = (state) => {
  return {
    periodo: state.doacao.periodoDoacao,
    diaRenovacao: state.doacao.diaRenovacaoDoacao,
    valor: state.doacao.valorDinheiroDoacao,
  };
};
export const selectInfoDoacaoObjeto = (state) => {
  return {
    objetos: state.objetos.objetosDoacao,
  };
};

export default doacaoSlice.reducer;

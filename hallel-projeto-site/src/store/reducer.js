import Actions from "./actions";

const initState = {
  isHost: false,
  conectarApenasComAudio: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case Actions.SET_IS_HOST:
      return {
        ...state,
        isHost: action.isHost,
      };
    default:
      return state;
  }
};

export default reducer;

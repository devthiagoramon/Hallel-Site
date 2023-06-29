const Actions = {
  SET_IS_HOST: "SET_IS_HOST",
  SET_CONECTAR_APENAS_COM_AUDIO: "SET_CONECTAR_APENAS_COM_AUDIO",
};

export const setIsHost = (isHost) => {
  return {
    type: Actions.SET_IS_HOST,
    isHost
  }
}


export default Actions;
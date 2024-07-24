import api from "api/api";

export const getMembroInfoService = async (token: string | null) => {
  try {
    const response = await api(
      `/membros/perfil/token/${token?.replace("Bearer ", "")}`,
      {
        headers: {
          Authorization: token,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Can't get membro info");
  }
};

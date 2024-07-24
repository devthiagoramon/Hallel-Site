import api from "api/api";

export const getAssociadoInfoService = async (
  token: string | null,
) => {
  try {
    const response = await api(
      `/associado/perfil/token/${token?.replace("Bearer ", "")}`,
      {
        headers: {
          Authorization: token,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Can't get associado info");
  }
};

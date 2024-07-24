import api from "api/api";

export const getAssociadoInfoService = async (
  token: string | null,
) => {
  try {
    const formattedToken = token?.replace("Bearer ", "");
    const response = await api(
      `/associado/perfil/${formattedToken}`,
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

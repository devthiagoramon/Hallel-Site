import api from "api/api";
import { EditProfileDTO } from "types/dtoTypes";
import { loadTokenAPI } from "utils/mainUtils";

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

export const editMembroInfoService = async (dto: EditProfileDTO) => {
  try {
    const response = await api.patch("/membros/perfil", dto, {
      headers: { Authorization: loadTokenAPI() },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Can't edit membro info");
  }
};

import api from "api/api";
import { MembroResponseListDTO } from "types/admDTOTypes";
import { loadTokenAPI } from "utils/mainUtils";

export const listMembrosAdmService = async (
  page?: number,
  size?: number,
): Promise<MembroResponseListDTO[] | undefined> => {
  try {
    const response = await api.get(
      `/administrador/membros?page=${page || 0}&size=${size || 20}`,
      {
        headers: {
          Authorization: loadTokenAPI(),
        },
      },
    );
    return response.data;
  } catch (error) {
    throw new Error("Cant list the members from API");
  }
};

import api from "api/api";
import { ListMinisterioDTO } from "types/admDTOTypes";
import { loadTokenAPI } from "utils/mainUtils";

export const listMinisterioAdmService = async (): Promise<
  ListMinisterioDTO[] | undefined
> => {
  try {
    const response = await api.get("/administrador/v1/ministerio", {
      headers: { Authorization: loadTokenAPI() },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Can't list the ministerios");
  }
};

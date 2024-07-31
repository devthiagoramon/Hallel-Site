import api from "api/api";
import { LoginAdmDTO } from "types/admDTOTypes";

export const loginAdmService = async (dto: LoginAdmDTO) => {
  try {
    const response = await api.post("/administrador/login", dto);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Adm can't login");
  }
};

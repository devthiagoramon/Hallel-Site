import api from "api/api";
import { loadTokenAPI } from "utils/mainUtils";

export const listMembrosAdmService = async () => {
  try {
    const response = await api.get("/administrador/membros", {
      headers: {
        Authorization: loadTokenAPI(),
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Cant list the members from API");
  }
};

import axios from "axios";
import { BASE_URL } from "../api/config";

export async function loginAdministrador(adminRequestObj) {
  try {
    let response = await axios.post(`${BASE_URL}/administrador/login`, { ...adminRequestObj });
    return response.data;
  } catch (e) {
    throw new Error("Erro entering as admin");
  }
}

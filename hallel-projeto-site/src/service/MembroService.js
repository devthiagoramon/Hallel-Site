import {
  membroLoadPerfilById,
  membrosListar,
  verifyMembroParticiparEvento,
  virarAssociadoAPI,
} from "../api/uris/MembroURLS";
import axios from "axios";
import { getToken } from "../utils/utilToken";

export async function membroListarAdmService() {
  let url = membrosListar();
  try {
    let axiosResponse = await axios.get(url, {
      headers: { Authorization: getToken() },
    });
    return axiosResponse.data;
  } catch (e) {
    throw new Error("Can not list Members.");
  }
}

export async function virarAssociadoService(virarAssociado) {
  let url = virarAssociadoAPI();
  try {
    let axiosResponse = await axios.post(
      url,
      { ...virarAssociado },
      { headers: { Authorization: getToken() } }
    );
    return axiosResponse.status === 200;
  } catch (e) {
    throw new Error("Can not make the user a member.");
  }
}

export async function verifyMembroParticiparEventoService(iduser) {
  let url = verifyMembroParticiparEvento(iduser);
  try {
    let axiosResponse = await axios.get(url, {
      headers: { Authorization: getToken() },
    });
    return axiosResponse.data;
  } catch (e) {
    console.error(e);
    return false;
  }
}

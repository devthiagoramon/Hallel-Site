import { uriDefaultPrefix } from "./utilsURI";

export function membrosListar() {
  return uriDefaultPrefix() + "/administrador/membros";
}

export function membroLoadPerfilById(idUser) {
  return uriDefaultPrefix() + "/membros/perfil/" + idUser;
}
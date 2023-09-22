import { uriDefaultPrefix } from "./utilsURI";

export function membrosListar() {
  return uriDefaultPrefix() + "/administrador/membros";
}

export function membroLoadPerfilById(idUser) {
  return uriDefaultPrefix() + "/membros/perfil/" + idUser;
}

export function virarAssociadoAPI(){
  return uriDefaultPrefix()+"/membros/virarAssociado"
}

export function verifyEmailParticiparEvento(email){
  return uriDefaultPrefix()+"/eventos/verificarEmail/"+email;
}
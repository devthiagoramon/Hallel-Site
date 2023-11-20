import { uriDefaultPrefix } from "./utilsURI";

/*
Login e solicitar cadastro
*/
export function homeCadastrar() {
  return uriDefaultPrefix() + "/cadastrar";
}

export function homeLogin() {
  return uriDefaultPrefix() + "/login";
}

/*
    Listar e matricular-se em todos os cursos do sistema
*/
export function homeListarCursos() {
  return uriDefaultPrefix() + "/listarCurso";
}

export function homeListarDesCursoByIdCurso(idCurso) {
  return uriDefaultPrefix() + "/descCurso/" + idCurso;
}

export function homeMatricularParticipanteInCursoByIdUserAndIdCurso(
  idUser,
  idCurso
) {
  return (
    uriDefaultPrefix() + "/matricularParticipante/" + idUser + "/" + idCurso
  );
}

/*
    Verificar token com a API
*/

export function homeVerificarToken(token) {
  let tokenArrumado = String(token).replace(" ", "+");
  return uriDefaultPrefix() + "/home/isTokenExpired?token=" + tokenArrumado;
}

/*
  Listar eventos
*/

export function listarEventosSemDestaqueHomeAPI(){
  return uriDefaultPrefix()+"/home/eventos/semDestaque";
}

export function listarEventosDestacadosHomeAPI(){
  return uriDefaultPrefix()+"/home/eventos/destacados"
}


import { uriDefaultPrefix } from "./utilsURI";

export function cursoCriar() {
  return uriDefaultPrefix() + "/cursos/create";
}

export function cursoGetParticipantes(idCurso) {
  return uriDefaultPrefix() + "/cursos/getParticipantes/" + idCurso;
}

export function cursoGetModulo(idCurso) {
  return uriDefaultPrefix() + "/cursos/getModulo/" + idCurso;
}

export function cursoListarById(idCurso) {
  return uriDefaultPrefix() + "/cursos/" + idCurso;
}

export function cursoEditarById(idCurso) {
  return uriDefaultPrefix() + "/cursos/update/" + idCurso;
}

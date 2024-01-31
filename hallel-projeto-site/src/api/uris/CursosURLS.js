import { administradorPrefix, uriDefaultPrefix } from "./utilsURI";

export function cursoCriar() {
  return uriDefaultPrefix() + administradorPrefix() + "/cursos/create";
}

export function cursoGetParticipantes(idCurso) {
  return uriDefaultPrefix() + administradorPrefix()+ "/cursos/getParticipantes/" + idCurso;
}

export function cursoGetModulo(idCurso) {
  return uriDefaultPrefix() + administradorPrefix()+ "/cursos/getModulo/" + idCurso;
}

export function cursoListarById(idCurso) {
  return uriDefaultPrefix() + administradorPrefix()+ "/cursos/" + idCurso;
}

export function cursoEditarById(idCurso) {
  return uriDefaultPrefix() + administradorPrefix()+ "/cursos/update/" + idCurso;
}

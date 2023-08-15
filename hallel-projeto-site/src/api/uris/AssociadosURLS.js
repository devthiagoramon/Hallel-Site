import { uriDefaultPrefix } from "./utilsURI";

export function associadoListarMeusCursos(idAssociado) {
  return uriDefaultPrefix() + "/associados/meusCursos/" + idAssociado;
}

export function associadoMatricularCurso(idAssociado, idCurso) {
  return uriDefaultPrefix() + "/cursos/meusCursos/" + idAssociado+"/"+idCurso;
}

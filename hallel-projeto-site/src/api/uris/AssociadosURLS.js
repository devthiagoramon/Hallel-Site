import { uriDefaultPrefix } from "./utilsURI";

export function associadoListarMeusCursos(idAssociado) {
  return uriDefaultPrefix() + "/associados/meusCursos/" + idAssociado;
}

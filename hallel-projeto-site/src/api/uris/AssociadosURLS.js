import { uriDefaultPrefix } from "./utilsURI";

export function associadoListarMeusCursos(idAssociado) {
  return uriDefaultPrefix() + "/associados/meusCursos/" + idAssociado;
}

export function associadoMatricularCurso(idAssociado, idCurso) {
  return (
    uriDefaultPrefix() + "/cursos/meusCursos/" + idAssociado + "/" + idCurso
  );
}

export function associadoListarPerfil(idAssociado) {
  return uriDefaultPrefix() + "/associados/perfil/" + idAssociado;
}

export function associadoListarPagamentoPerfilAssociado(idAssociado, mes, ano) {
  return (
    uriDefaultPrefix() +
    "/associados/perfil/pagamento/" +
    idAssociado +
    "?mes=" +
    mes +
    "&ano=" +
    ano
  );
}

export function associadoPagarAssociacaoAPI() {
  return uriDefaultPrefix() + "/associados/pagarAssociacao";
}

export function associadoCartaoAssociadoAPI(idAssociado) {
  return uriDefaultPrefix() + "/associados/cartaoAssociado/" + idAssociado;
}

import {
  administradorPrefix,
  eventoPrefix,
  uriDefaultPrefix,
} from "./utilsURI";

/*
    Eventos
*/

export function eventoAdicionar() {
  return (
    uriDefaultPrefix() + administradorPrefix() + eventoPrefix() + "/create"
  );
}

export function eventoListarById(idEvento) {
  return (
    uriDefaultPrefix() +
    administradorPrefix() +
    eventoPrefix() +
    "/" +
    idEvento +
    "/list"
  );
}

export function eventoEditarById(idEvento) {
  return (
    uriDefaultPrefix() +
    administradorPrefix() +
    eventoPrefix() +
    "/" +
    idEvento +
    "/edit"
  );
}

export function eventoListar() {
  return uriDefaultPrefix() + eventoPrefix();
}

export function eventoListarArquivado() {
  return (
    uriDefaultPrefix() + administradorPrefix() + eventoPrefix() + "/arquivados"
  );
}

export function eventoArquivar(idEvento) {
  return (
    uriDefaultPrefix() +
    administradorPrefix() +
    eventoPrefix() +
    "/" +
    idEvento +
    "/arquivar"
  );
}

export function eventoDesarquivar(idEvento) {
  return (
    uriDefaultPrefix() +
    administradorPrefix() +
    eventoPrefix() +
    "/" +
    idEvento +
    "/desarquivar"
  );
}


/*
    Despesas (Evento)
*/
export function despesasListarByEventoId(id) {
  return (
    uriDefaultPrefix() +
    administradorPrefix() +
    eventoPrefix() +
    "/" +
    id +
    "/despesa/listAll"
  );
}

export function despesasAddToEventoId(id) {
  return (
    uriDefaultPrefix() +
    administradorPrefix() +
    eventoPrefix() +
    "/" +
    id +
    "/despesa/add"
  );
}


export function despesaDeletarByEventoAndIdDespesa(idEvento, idDespesa) {
  return (
    uriDefaultPrefix() +
    administradorPrefix() +
    eventoPrefix() +
    "/" +
    idEvento +
    "/despesa/" +
    idDespesa +
    "/delete"
  );
}

export function despesaEditarByEventoAndIdDespesa(idEvento, idDespesa) {
  return (
    uriDefaultPrefix() +
    administradorPrefix() +
    eventoPrefix() +
    "/" +
    idEvento +
    "/despesa/" +
    parseInt(idDespesa) +
    "/edit"
  );
}

/*
    Local Evento (Eventos)
*/

export function localEventoAdicionar() {
  return uriDefaultPrefix() + "/locais/create";
}

export function localEventoListar() {
  return uriDefaultPrefix() + "/locais/listLocalizacao";
}

export function localEventoListarById(id) {
  return uriDefaultPrefix() + "/locais/" + id + "/list";
}

export function localEventoEditarById(idLocalEventoModal) {
  return uriDefaultPrefix() + "/locais/" + idLocalEventoModal + "/edit";
}

export function localEventoDeletarById(idLocalEventoModal) {
  return uriDefaultPrefix() + "/locais/" + idLocalEventoModal + "/delete";
}

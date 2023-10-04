import {
    administradorPrefix,
    eventoPrefix,
    uriDefaultPrefix,
} from "./utilsURI";

/*
  Eventos (Usuários)

*/

export function eventoListarTodosEventosUsuarios() {
    return uriDefaultPrefix() + "/home" + eventoPrefix() + "/listar";
}

export function eventoParticiparEventoAPI() {
    return uriDefaultPrefix() + "/home" + eventoPrefix() + "/participarEvento";
}

export function eventoUsuarioIsInscrito(idEvento, idUser) {
    return (
        uriDefaultPrefix() +
        eventoPrefix() +
        "/verificarInscrito?idEvento=" +
        idEvento +
        "&idUser=" +
        idUser
    );
}

export function eventoVerifyStatusPagamentoUser(idEvento, emailUser) {
    return uriDefaultPrefix() +
        eventoPrefix() + "/verificarSituacaoEmEvento?idEvento=" + idEvento + "&email=" + emailUser
}

export function eventoListarEventosInscritos(idUser) {
    return uriDefaultPrefix() + eventoPrefix() + "/eventosInscritos?idUser=" + idUser;
}

/*
    Eventos (Administrador)
*/

export function eventoAdicionar() {
    return (
        uriDefaultPrefix() + administradorPrefix() + eventoPrefix() + "/create"
    );
}

export function eventoListarParticipantes(idEvento) {
    return (
        uriDefaultPrefix() +
        administradorPrefix() +
        eventoPrefix() +
        "/" +
        idEvento +
        "/get/participantes"
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
    return uriDefaultPrefix() + administradorPrefix() + eventoPrefix() + "/asc";
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
    return uriDefaultPrefix() + administradorPrefix() + "/locais/create";
}

export function localEventoListar() {
    return uriDefaultPrefix() + administradorPrefix() + "/locais/listLocalizacao";
}

export function localEventoListarById(id) {
    return uriDefaultPrefix() + administradorPrefix() + "/locais/" + id + "/list";
}

export function localEventoEditarById(idLocalEventoModal) {
    return (
        uriDefaultPrefix() +
        administradorPrefix() +
        "/locais/" +
        idLocalEventoModal +
        "/edit"
    );
}

export function localEventoDeletarById(idLocalEventoModal) {
    return (
        uriDefaultPrefix() +
        administradorPrefix() +
        "/locais/" +
        idLocalEventoModal +
        "/delete"
    );
}

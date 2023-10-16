import {
    despesaDeletarByEventoAndIdDespesa,
    despesaEditarByEventoAndIdDespesa,
    despesasAddToEventoId,
    despesasListarByEventoId,
    eventoAdicionar,
    eventoArquivar,
    eventoDesarquivar,
    eventoEditarById,
    eventoListarAdm,
    eventoListarArquivado,
    eventoListarById,
    eventoListarParticipantes,
    eventoListarTodosEventosUsuarios,
    eventoParticiparEventoAPI,
    eventoUsuarioIsInscrito,
    eventoVerifyStatusPagamentoUser,
    localEventoAdicionar, localEventoDeletarById,
    localEventoEditarById,
    localEventoListar,
    localEventoListarById
} from "../api/uris/EventosURLS";
import axios from "axios";


/*
    Eventos
*/

export function listarTodosEventosUsuarioService() {
    let url = eventoListarTodosEventosUsuarios();
    let response = [];
    axios.get(url, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        response = res.data;
        return response;
    }).catch((error) => {
        console.error(error)
    });
    return response;
}

export function listarTodosEventosAdmService() {
    let url = eventoListarAdm();
    let response = [];

    axios.get(url, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        response = res.data;
        return response;
    }).catch((error) => {
        console.error(error);
    });

    return response;
}

export function listarTodosEventosArquivadosService() {
    let url = eventoListarArquivado();
    let response = [];
    axios.get(url, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        response = res.data;
        return response;
    }).catch((error) => {
        console.error(error);
    });
    return response;
}


export function participarEventoService(usuarioEventoRequest) {
    let url = eventoParticiparEventoAPI();
    let response = [];

    axios.post(url, {
        ...usuarioEventoRequest
    }).then((res) => {
        response = res.status;
        return response === 200;
    }).catch((error) => {
        console.error(error);
    });

    return response;
}

export function eventoIsInscritoService(idEvento) {
    let url = eventoUsuarioIsInscrito(idEvento, localStorage.getItem("HallelId"));
    let response = false;
    axios
        .get(url, {headers: {Authorization: localStorage.getItem("token")}})
        .then((res) => {
            response = res.data;
            return response;
        })
        .catch((error) => {
            console.error(error);
        });
    return response;
}

export function eventoVerifyStatusPagamentoService(idEvento) {
    let url = eventoVerifyStatusPagamentoUser(idEvento, localStorage.getItem("HallelId"));
    let response = false;
    axios
        .get(url, {headers: {Authorization: localStorage.getItem("token")}})
        .then((res) => {
            response = res.data;
            return response;
        }).catch((error) => {
        console.error(error);
    });
    return response;
}

export function eventoAdicionarEventoService(eventos) {
    let url = eventoAdicionar();
    let response = false;
    axios.post(url, {
        ...eventos
    }, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        response = res.status;
        return response === 200;
    }).catch((error) => {
        console.error(error);
    })
    return response;
}

export function eventoListarParticipantesService(idEvento) {
    let url = eventoListarParticipantes(idEvento);
    let response = undefined;
    axios.get(url, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        response = res.data;
        return response;
    }).catch((error) => {
        console.error(error);
    });
    return response;
}

export function eventoListarPorIdService(idEvento) {
    let url = eventoListarById(idEvento);
    let response = undefined;
    axios.get(url, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        response = res.data;
        return response;
    }).catch((error) => {
        console.error(error);
    });
    return response;
}

export function eventoAtualizarService(idEvento, eventoNew) {
    let url = eventoEditarById(idEvento);
    let response = false;
    axios.post(url, {
        ...eventoNew
    }, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        response = res.status;
        return response === 200;
    }).catch((error) => {
        console.error(error);
    });
    return response;
}

export function arquivarEventoService(idEvento) {
    let url = eventoArquivar(idEvento);
    let response = false;
    axios.get(url, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        response = res.status;
        return response === 200;
    }).catch((error) => {
        console.error(error);
    });
    return response;
}

export function desarquivarArquivoService(idEvento) {
    let url = eventoDesarquivar(idEvento);
    let response = false;
    axios.get(url, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        response = res.data;
        return response;
    }).catch((error) => {
        console.error(error);
    });
    return response;
}

/*
    Despesas de Eventos
 */

export function eventoListarDespesasPorIdEventoService(idEvento) {
    let url = despesasListarByEventoId(idEvento);
    let response = undefined;
    axios.get(url, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        response = res.data;
        return response;
    }).catch((error) => {
        console.error(error);
    });
    return response;
}

export function eventoAddDespesasParaEventoPorIdService(idEvento, despesaEvento) {
    let url = despesasAddToEventoId(idEvento);
    let response = false;
    axios.post(url, {
        ...despesaEvento
    }, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        response = res.data;
        return response;
    }).catch((error) => {
        console.error(error)
    });
    return response;
}

export function eventoDeletarDespesaPorIdEIdEventoService(idEvento, idDespesa) {
    let url = despesaDeletarByEventoAndIdDespesa(idEvento, idDespesa);
    let response = false;
    axios.delete(url, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        response = res.status;
        return response === 200;
    }).catch((error) => {
        console.error(error);
    });
    return response;
}

export function eventoEditarDespesaPorIdEIdEventoService(idEvento, idDespesa, despesaNew) {
    let url = despesaEditarByEventoAndIdDespesa(idEvento, idDespesa);
    let response = false;
    axios.put(url, {...despesaNew}, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        response = res.status;
        return response === 200;
    }).catch((error) => {
        console.error(error)
    });
    return response;
}

/*
    Local de Eventos
 */

export function eventoAdicionarLocalEventoService(localEvento) {
    let url = localEventoAdicionar();
    let response = false;
    axios.post(url, {...localEvento}, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        response = res.status;
        return response === 200;
    }).catch((error) => {
        console.error(error)
    });
    return response;
}

export function eventoListarLocalEventosService() {
    let url = localEventoListar();
    let response = [];
    axios.get(url, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        response = res.data;
        return response;
    }).catch((error) => {
        console.error(error)
    });
    return response;
}

export function eventoListarLocalEventoPorId(idLocalEvento) {
    let url = localEventoListarById(idLocalEvento);
    let response = undefined;
    axios.get(url,
        {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then((res) => {
            response = res.data;
            return response;
        }).catch((error) => {
        console.error(error);
    });
    return response;
}

export function eventoEditarLocalEventoPorIdService(idLocalEvento, localEventoNew) {
    let url = localEventoEditarById(idLocalEvento);
    let response = false;
    axios.put(url,
        {...localEventoNew},
        {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((res) => {
        response = res.status;
        return response === 200;
    }).catch((error) => {
        console.error(error);
    });
    return response;
}

export function eventoDeletarLocalEventoPorId(idLocalEvento) {
    let url = localEventoDeletarById(idLocalEvento);
    let response = false;
    axios.delete(url, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        response = res.status;
        return response === 200;
    }).catch((error) => {
        console.error(error);
    });
    return response;
}
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
import { getToken } from "../utils/utilToken";


/*
    Eventos
*/

export async function listarTodosEventosUsuarioService() {
    let url = eventoListarTodosEventosUsuarios();
    try {
        let axiosResponse = await axios.get(url);
        return axiosResponse.data;
    }catch (e) {
        console.error(e)
        throw new Error("Error listing all the events")
    }
}

export async function listarTodosEventosAdmService() {
    let url = eventoListarAdm();
    try {
        let axiosResponse = await axios.get(url, {
            headers: {
                Authorization: getToken()
            }
        });
        return axiosResponse.data;
    } catch (e) {
        console.error(e);
        return [];
    }
}

export async function listarTodosEventosArquivadosService() {
    let url = eventoListarArquivado();
    try {
        let axiosResponse = await axios.get(url, {
            headers: {
                Authorization: getToken()
            }
        });
        return axiosResponse.data || [];
    } catch (e) {
        console.error(e);
        return [];
    }
}


export async function participarEventoService(usuarioEventoRequest) {
    let url = eventoParticiparEventoAPI();
    try {
        let axiosResponse = await axios.post(url, {
            ...usuarioEventoRequest
        });
        return axiosResponse.data;
    } catch (e) {
        return false;
    }
}

export async function eventoIsInscritoService(idEvento) {
    let url = eventoUsuarioIsInscrito(idEvento, localStorage.getItem("HallelId"));
    try {
        let axiosResponse = await axios
            .get(url, {headers: {Authorization: getToken()}});
        return axiosResponse.data;
    } catch (e) {
        console.error(e);
        return false;
    }
}

export async function eventoVerifyStatusPagamentoService(idEvento) {
    let url = eventoVerifyStatusPagamentoUser(idEvento, localStorage.getItem("HallelId"));
    try {
        let axiosResponse = await axios
            .get(url, {headers: {Authorization: getToken()}});
        return axiosResponse.data;
    } catch (e) {
        console.error(e);
        return false;
    }
}

export async function eventoAdicionarEventoService(eventos) {
    let url = eventoAdicionar();
    try {
        await axios.post(url, {
            ...eventos
        }, {
            headers: {
                Authorization: getToken()
            }
        })
    } catch (e) {
        console.error(e);
    }
}

export async function eventoListarParticipantesService(idEvento) {
    let url = eventoListarParticipantes(idEvento);
    try {
        let axiosResponse = await axios.get(url, {
            headers: {
                Authorization: getToken()
            }
        });
        console.log(axiosResponse.data)
        return axiosResponse.data;
    } catch (e) {
        throw new Error("Can not list participantes")
    }
}

export async function eventoListarPorIdService(idEvento) {
    let url = eventoListarById(idEvento);
    try {
        let axiosResponse = await axios.get(url, {
            headers: {
                Authorization: getToken()
            }
        });
        return axiosResponse.data;
    } catch (e) {
        throw new Error("Cant list by id a event")
    }
}

export async function eventoAtualizarService(idEvento, eventoNew) {
    let url = eventoEditarById(idEvento);
    try {
        let axiosResponse = await axios.post(url, {
            ...eventoNew
        }, {
            headers: {
                Authorization: getToken()
            }
        });
        return axiosResponse.status === 200;
    } catch (e) {
        console.error(e)
        return false;
    }
}

export async function arquivarEventoService(idEvento) {
    let url = eventoArquivar(idEvento);
    try {
        let axiosResponse = await axios.get(url, {
            headers: {
                Authorization: getToken()
            }
        });
        return axiosResponse === 200;
    } catch (e) {
        console.error(e)
        return false;
    }
}

export async function desarquivarArquivoService(idEvento) {
    let url = eventoDesarquivar(idEvento);
    try {
        let axiosResponse = await axios.get(url, {
            headers: {
                Authorization: getToken()
            }
        });
        return axiosResponse.status === 200;
    } catch (e) {
        console.error(e)
        return false;
    }
}

/*
    Despesas de Eventos
 */

export async function eventoListarDespesasPorIdEventoService(idEvento) {
    let url = despesasListarByEventoId(idEvento);
    try {
        let axiosResponse = await axios.get(url, {
            headers: {
                Authorization: getToken()
            }
        });
        return axiosResponse.data;
    } catch (e) {
        console.error(e)
        return undefined;
    }
}

export async function eventoAddDespesasParaEventoPorIdService(idEvento, despesaEvento) {
    let url = despesasAddToEventoId(idEvento);
    try {
        let axiosResponse = await axios.post(url, {
            ...despesaEvento
        }, {
            headers: {
                Authorization: getToken()
            }
        });
        return axiosResponse.status === 200;
    } catch (e) {
        console.error(e)
        return false;
    }
}

export async function eventoDeletarDespesaPorIdEIdEventoService(idEvento, idDespesa) {
    let url = despesaDeletarByEventoAndIdDespesa(idEvento, idDespesa);
    try {
        let axiosResponse = await axios.delete(url, {
            headers: {
                Authorization: getToken()
            }
        });
        return axiosResponse.status === 200;
    } catch (e) {
        console.error(e)
        return false;
    }
}

export async function eventoEditarDespesaPorIdEIdEventoService(idEvento, idDespesa, despesaNew) {
    let url = despesaEditarByEventoAndIdDespesa(idEvento, idDespesa);
    try {
        let axiosResponse = await axios.put(url, {...despesaNew}, {
            headers: {
                Authorization: getToken()
            }
        });
        return axiosResponse.status === 200;
    } catch (e) {
        console.error(e)
        return false;
    }
}

/*
    Local de Eventos
 */

export async function eventoAdicionarLocalEventoService(localEvento) {
    let url = localEventoAdicionar();
    try {
        let axiosResponse = await axios.post(url, {...localEvento}, {
            headers: {
                Authorization: getToken()
            }
        });
        return axiosResponse.status === 200;
    } catch (e) {
        console.error(e);
        return false;
    }
}

export async function eventoListarLocalEventosService() {
    let url = localEventoListar();
    try {
        let axiosResponse = await axios.get(url, {
            headers: {
                Authorization: getToken()
            }
        });
        return axiosResponse.data;
    } catch (e) {
        console.error(e);
        return [];
    }
}

export async function eventoListarLocalEventoPorId(idLocalEvento) {
    let url = localEventoListarById(idLocalEvento);
    try {
        let axiosResponse = await axios.get(url,
            {
                headers: {
                    Authorization: getToken()
                }
            });
        return axiosResponse.data;
    } catch (e) {
        console.error(e)
        return undefined;
    }
}

export async function eventoEditarLocalEventoPorIdService(idLocalEvento, localEventoNew) {
    let url = localEventoEditarById(idLocalEvento);
    try {
        let axiosResponse = await axios.put(url,
            {...localEventoNew},
            {
                headers: {
                    Authorization: getToken()
                }
            });
        return axiosResponse.status === 200;
    } catch (e) {
        console.error(e);
        return false;
    }
}

export async function eventoDeletarLocalEventoPorId(idLocalEvento) {
    let url = localEventoDeletarById(idLocalEvento);
    try {
        let axiosResponse = await axios.delete(url, {
            headers: {
                Authorization: getToken()
            }
        });
        return axiosResponse.status === 200;
    } catch (e) {
        console.error(e)
        return false;
    }
}
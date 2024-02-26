import {
    associadosGetAllPagamentosAPI,
    associadosListByMesAnoAPI,
    codigoEntradaCriarAPI,
    codigoEntradaDeletarAPI,
    codigoEntradaEditarAPI,
    codigoEntradaListarAPI, codigoSaidaCriarAPI,
    codigoSaidaDeletarAPI, codigoSaidaEditarAPI, codigoSaidaListarAPI,
    doacaoDoar,
    doacaoDoarObjetoAPI,
    doacaoListarDiaAPI,
    doacaoListarObjetoIdAPI,
    doacaoListarObjetosAPI,
    doacaoListarSemanaAPI,
    doacaoListarTodosAPI,
    doacaoObjetoNaoRecebidoAPI,
    entradasGetAllPaginas,
    entradasGetEntradasMesValorAPI,
    entradasListEntradasByPageAndDate,
    entradasUltimasEntradasAPI,
    getAssociadoById,
    getPagamentoAssociadoByMesAndAno,
    metaAlterarByMesAnoAPI,
    metaListarByMesAnoAPI,
    metaLoadPorcentagemByMesAnoAPI,
    saidaAdicionarCodigoSaidaAPI,
    saidaListarCodigoSaidaAPI,
    saidaListarCodigosSaidasAPI,
    saidasGetAllPaginas,
    saidasListEntradasByPageAndDate,
    saidaUltimasSaidasAPI
} from "../api/uris/FinanceiroURLS";
import axios from "axios";
import { getToken } from "../utils/utilToken";

export async function allPagamentoAssociadoService() {
    let url = associadosGetAllPagamentosAPI();
    try {
        let axiosResponse = await axios
            .get(url,
                {headers: {Authorization: getToken()}}
            );
        return axiosResponse.data;
    } catch (e) {
        console.error(e);
        return [];
    }
}

export async function associadoListByMesAnoService(mes, ano) {
    let url = associadosListByMesAnoAPI(mes, ano)
    try {
        let axiosResponse = await axios
            .get(url,
                {headers: {Authorization: getToken()}}
            );
        return axiosResponse.data;
    } catch (e) {
        console.error(e);
        return [];
    }
}

export async function listAssociadoByIdAdmService(idAssociado) {
    let url = getAssociadoById(idAssociado);
    try {
        let axiosResponse = await axios
            .get(url,
                {headers: {Authorization: getToken()}}
            );
        return axiosResponse.data;
    } catch (e) {
        console.error(e)
        return null;
    }
}

export async function getPagamentoAssociadoByMesAnoAdmService(idAssociado, mes, ano) {
    let url = getPagamentoAssociadoByMesAndAno(idAssociado, mes, ano)
    try {
        let axiosResponse = await axios
            .get(url,
                {headers: {Authorization: getToken()}}
            );
        return axiosResponse.data;
    } catch (e) {
        console.error(e);
        return undefined;
    }
}

export async function listDoacoesService(dataAux, require) {
    let url;
    if (require === "todos") {
        url = doacaoListarTodosAPI(dataAux.mes, dataAux.ano);
    } else if (require === "dia") {
        url = doacaoListarDiaAPI();
    } else if (require === "semana") {
        url = doacaoListarSemanaAPI();
    }
    try {
        let axiosResponse = await axios
            .get(url,
                {headers: {Authorization: getToken()}}
            );
        return axiosResponse.data;
    } catch (e) {
        console.error(e)
        return [];
    }
}

export async function listDoacoesObjetosService() {
    let url = doacaoListarObjetosAPI();
    try {
        let axiosResponse = await axios
            .get(url,
                {headers: {Authorization: getToken()}}
            );
        return axiosResponse.data;
    } catch (e) {
        console.error(e)
        return [];
    }
}

export async function listDoacaoObjetoPorIdService(id) {
    let url = doacaoListarObjetoIdAPI(id);
    try {
        let axiosResponse = await axios
            .get(url,
                {headers: {Authorization: getToken()}}
            );
        return axiosResponse.data;
    } catch (e) {
        console.error(e)
        return {
            descricao: "",
            recebido: false,
            dataDoacao: "",
            imagem: "",
            quantidade: "",
            dataRecebida: "Não recebida",
            email: "",
        };
    }
}

export async function recebiObjetoDoacaoService(id, isRecebido) {
    let url;
    if (isRecebido) {
        url = doacaoObjetoNaoRecebidoAPI(id);
    } else {
        url = doacaoListarObjetoIdAPI(id);
    }
    try {
        let axiosResponse = await axios
            .post(url,
                {headers: {Authorization: getToken()}}
            );
        return axiosResponse === 200;
    } catch (e) {
        console.error(e)
        return false;
    }
}

export async function doarObjetoService(doacoesObjeto) {
    let url = doacaoDoarObjetoAPI();
    try {
        let axiosResponse = await axios
            .post(url, doacoesObjeto,
                {headers: {Authorization: getToken()}}
            );
        return axiosResponse.status === 200;
    } catch (e) {
        console.error(e)
        return false;
    }
}

export async function doarDinheiroService(doacao) {
    let url = doacaoDoar();
    try {
        let axiosResponse = await axios
            .post(url, {...doacao},
                {headers: {Authorization: getToken()}}
            );
        return axiosResponse === 200;
    } catch (e) {
        console.error(e)
        return false;
    }
}

/*
    Parte de saidas (Financeiro)
*/

export async function listarSaidaCodigoPorCodigoService(codigo) {
    let url = saidaListarCodigoSaidaAPI(codigo)
    try {
        let axiosResponse = await axios
            .get(url,
                {headers: {Authorization: getToken()}}
            );
        return axiosResponse.data;
    } catch (e) {
        console.error(e)
        return undefined;
    }
}

export async function listarSaidaCodigosService() {
    let url = saidaListarCodigosSaidasAPI();
    try {
        let axiosResponse = await axios
            .get(url,
                {headers: {Authorization: getToken()}}
            );
        return axiosResponse.data;
    } catch (e) {
        console.error(e)
        return [];
    }
}

export async function adicionarCodigoSaidaService(codigoSaida) {
    let url = saidaAdicionarCodigoSaidaAPI()
    try {
        let axiosResponse = await axios
            .post(url, {codigoSaida},
                {headers: {Authorization: getToken()}}
            );
        return axiosResponse.data;
    } catch (e) {
        console.error(e)
    }
}

export async function saidaUltimasSaidaService() {
    let url = saidaUltimasSaidasAPI();
    try {
        let axiosResponse = await axios
            .get(url,
                {headers: {Authorization: getToken()}}
            );
        return axiosResponse.data;
    } catch (e) {
        console.error(e)
        return [];
    }
}

export async function saidaGetAllPaginasService(mes, ano) {
    let url = saidasGetAllPaginas(mes, ano)
    try {
        let axiosResponse = await axios
            .get(url,
                {headers: {Authorization: getToken()}}
            );
        return axiosResponse.data;
    } catch (e) {
        console.error(e)
        return 0;
    }
}

export async function saidaListarByPageAndDateService(numPage, mes, ano) {
    let url = saidasListEntradasByPageAndDate(numPage, mes, ano)
    try {
        let axiosResponse = await axios
            .get(url,
                {headers: {Authorization: getToken()}}
            );
        return axiosResponse.data;
    } catch (e) {
        console.error(e)
        return [];
    }
}

/*
    Parte de entradas (Financeiro)
*/

export async function entradaUltimasEntradasService() {
    let url = entradasUltimasEntradasAPI();
    try {
        let axiosResponse = await axios
            .get(url,
                {headers: {Authorization: getToken()}}
            );
        return axiosResponse.data;
    } catch (e) {
        console.error(e)
        return [];
    }
}

export async function entradaGetAllPaginasService(mes, ano) {
    let url = entradasGetAllPaginas(mes, ano)
    try {
        let axiosResponse = await axios
            .get(url,
                {headers: {Authorization: getToken()}}
            );
        return axiosResponse.data;
    } catch (e) {
        console.error(e)
        return 0;
    }
}

export async function entradaListarByPageAndDateService(numPage, mes, ano) {
    let url = entradasListEntradasByPageAndDate(numPage, mes, ano)
    try {
        let axiosResponse = await axios
            .get(url,
                {headers: {Authorization: getToken()}}
            );
        return axiosResponse.data;
    } catch (e) {
        console.error(e)
        return [];
    }
}

export async function entradaGetByMesValorService(mes, ano) {
    let url = entradasGetEntradasMesValorAPI(mes, ano);
    try {
        let axiosResponse = await axios
            .get(url,
                {headers: {Authorization: getToken()}}
            );
        return axiosResponse.data;
    } catch (e) {
        console.error(e)
        return 0;
    }
}

/*
    Parte de meta mensal (Financeiro)
*/

export async function metaGetPorcentagemPorMesEAnoService(mes, ano) {
    let url = metaLoadPorcentagemByMesAnoAPI(mes, ano)
    try {
        let axiosResponse = await axios
            .get(url,
                {headers: {Authorization: getToken()}}
            );
        return axiosResponse.data;
    } catch (e) {
        console.error(e);
        return 0.0;
    }
}

export async function metaListarPorMesAnoService(mes, ano) {
    let url = metaListarByMesAnoAPI(mes, ano);
    try {
        let axiosResponse = await axios
            .get(url,
                {headers: {Authorization: getToken()}}
            );
        return axiosResponse.data;
    } catch (e) {
        console.error(e);
        return 0.0;
    }
}

export async function metaAlterarPorMesAnoService(mes, ano, novaMeta) {
    let url = metaAlterarByMesAnoAPI(mes, ano, novaMeta);
    try {
        let axiosResponse = await axios
            .put(url, {},
                {headers: {Authorization: getToken()}}
            );
        return axiosResponse.status === 200;
    } catch (e) {
        console.error(e)
        return false;
    }
}

/*
  Parte de codigos dos financeiro, tanto de entradas
  quanto de saidas
*/

// Entradas
export async function codigoEntradaCriarService(codigoEntrada) {
    let url = codigoEntradaCriarAPI()
    try {
        let axiosResponse = await axios
            .post(url, {...codigoEntrada},
                {headers: {Authorization: getToken()}}
            );
        return axiosResponse.status === 200;
    } catch (e) {
        console.error(e)
        return false;
    }
}

export async function codigoEntradaListarService() {
    let url = codigoEntradaListarAPI();
    try {
        let axiosResponse = await axios
            .get(url,
                {headers: {Authorization: getToken()}}
            );
        return axiosResponse.data;
    } catch (e) {
        console.error(e)
        return [];
    }
}

export async function codigoEntradaEditarService(id, novoCodigo) {
    let url = codigoEntradaEditarAPI(id);
    try {
        let axiosResponse = await axios
            .put(url, {...novoCodigo},
                {headers: {Authorization: getToken()}}
            );
        return axiosResponse.status === 200;
    } catch (e) {
        console.error(e)
        return false;
    }
}

export async function codigoEntradaDeletarService(id) {
    let url = codigoEntradaDeletarAPI(id)
    try {
        let axiosResponse = await axios
            .delete(url,
                {headers: {Authorization: getToken()}}
            );
        return axiosResponse.status === 200;
    } catch (e) {
        console.error(e)
        return false;
    }
}

// Saida

export async function codigoSaidaCriarService(codigoEntrada) {
    let url = codigoSaidaCriarAPI()
    try {
        let axiosResponse = await axios
            .post(url, {...codigoEntrada},
                {headers: {Authorization: getToken()}}
            );
        return axiosResponse.status === 200;
    } catch (e) {
        console.error(e)
        return false;
    }
}

export async function codigoSaidaListarService() {
    let url = codigoSaidaListarAPI();
    try {
        let axiosResponse = await axios
            .get(url,
                {headers: {Authorization: getToken()}}
            );
        return axiosResponse.data;
    } catch (e) {
        console.error(e)
        return [];
    }
}

export async function codigoSaidaEditarService(id, novoCodigo) {
    let url = codigoSaidaEditarAPI(id);
    try {
        let axiosResponse = await axios
            .put(url, {...novoCodigo},
                {headers: {Authorization: getToken()}}
            );
        return axiosResponse.status === 200;
    } catch (e) {
        console.error(e)
        return false;
    }
}

export async function codigoSaidaDeletarService(id) {
    let url = codigoSaidaDeletarAPI(id)
    try {
        let axiosResponse = await axios
            .delete(url,
                {headers: {Authorization: getToken()}}
            );
        return axiosResponse.status === 200;
    } catch (e) {
        console.error(e)
        return false;
    }
}
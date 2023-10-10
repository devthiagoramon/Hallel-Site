import {
    associadosGetAllPagamentosAPI,
    associadosListByMesAnoAPI,
    doacaoListarDiaAPI, doacaoListarObjetoIdAPI,
    doacaoListarObjetosAPI,
    doacaoListarSemanaAPI,
    doacaoListarTodosAPI, doacaoObjetoNaoRecebidoAPI,
    getAssociadoById,
    getPagamentoAssociadoByMesAndAno
} from "../api/uris/FinanceiroURLS";
import axios from "axios";

export async function allPagamentoAssociadoService() {
    let url = associadosGetAllPagamentosAPI();
    try {
        let axiosResponse = await axios
            .get(url,
                {headers: {Authorization: localStorage.getItem("token")}}
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
                {headers: {Authorization: localStorage.getItem("token")}}
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
                {headers: {Authorization: localStorage.getItem("token")}}
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
                {headers: {Authorization: localStorage.getItem("token")}}
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
                {headers: {Authorization: localStorage.getItem("token")}}
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
                {headers: {Authorization: localStorage.getItem("token")}}
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
                {headers: {Authorization: localStorage.getItem("token")}}
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

export async function recebiObjetoDoacaoService(id, isRecebido){
    let url;
    if(isRecebido) {
        url = doacaoObjetoNaoRecebidoAPI(id);
    }else{
        url = doacaoListarObjetoIdAPI(id);
    }
    try{
        let axiosResponse = await axios
                  .post(url,
                                {headers:{Authorization: localStorage.getItem("token")}}
                            );
        return axiosResponse === 200;
    }catch(e){
        console.error(e)
        return false;
    }
}
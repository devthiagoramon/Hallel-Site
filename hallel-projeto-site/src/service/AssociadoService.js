import {
    associadoCartaoAssociadoAPI,
    associadoListarMeusCursos,
    associadoListarPagamentoPerfilAssociado,
    associadoMatricularCurso, associadoPagarAssociacaoAPI
} from "../api/uris/AssociadosURLS";
import axios from "axios";


export async function associadoListarMeusCursosService(idAssociado) {
    let url = associadoListarMeusCursos(idAssociado)
    let response = [];
    return axios
        .get(url,
            {headers: {Authorization: localStorage.getItem("token")}}
        ).then((res) => {
            response = res.data;
            return response;
        }).catch((error) => {
            console.error(error)
            return response
        });
}

export async function associadoMatricularCursoService(idAssociado, idCurso) {
    let url = associadoMatricularCurso(idAssociado, idCurso)
    let response = false;
    return axios
        .get(url,
            {headers: {Authorization: localStorage.getItem("token")}}
        ).then((res) => {
            response = res.status;
            return response === 200;
        }).catch((e) => {
            console.error(e);
            return response
        });
}

export async function associadoListarPagamentoPerfilAssociadoService(idAssociado, mes, ano) {
    let url = associadoListarPagamentoPerfilAssociado(idAssociado, mes, ano)
    let response = undefined;
    return axios
        .get(url,
            {headers: {Authorization: localStorage.getItem("token")}}
        ).then((res) => {
            response = res.data;
            return response;
        }).catch((e) => {
            console.error(e);
            return response;
        });
}

export async function associadoPagarAssociacaoService(pagamentoAssociacao) {
    let url = associadoPagarAssociacaoAPI();
    let response = false;
    return axios.post
    (url, {...pagamentoAssociacao},
        {headers: {Authorization: localStorage.getItem("token")}})
        .then((res) => {
            response = res.status
            return response === 200;
        })
        .catch((e) => {
            console.error(e)
            return response;
        })
}

export async function associadoGetCartaoCreditoService(idAssociado) {
    let url = associadoCartaoAssociadoAPI(idAssociado)
    let response = undefined
    return axios.get
    (url,
        {headers: {Authorization: localStorage.getItem("token")}})
        .then((res) => {
            response = res.data
            return response;
        })
        .catch((e) => {
            console.error(e)
            return response
        })
}

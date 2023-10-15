import {
    associadoCartaoAssociadoAPI,
    associadoListarMeusCursos,
    associadoListarPagamentoPerfilAssociado,
    associadoMatricularCurso, associadoPagarAssociacaoAPI
} from "../api/uris/AssociadosURLS";
import axios from "axios";

export async function associadoListarMeusCursosService(idAssociado) {
    let url = associadoListarMeusCursos(idAssociado)
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

export async function associadoMatricularCursoService(idAssociado, idCurso){
    let url = associadoMatricularCurso(idAssociado, idCurso)
    try{
        let axiosResponse = await axios
                  .get(url,
                                {headers:{Authorization: localStorage.getItem("token")}}
                            );
        return axiosResponse.status === 200;
    }catch(e){
        console.error(e)
        return false;
    }
}

export async function associadoListarPagamentoPerfilAssociadoService(idAssociado, mes, ano){
    let url = associadoListarPagamentoPerfilAssociado(idAssociado,mes,ano)
    try{
        let axiosResponse = await axios
                  .get(url,
                                {headers:{Authorization: localStorage.getItem("token")}}
                            );
        return axiosResponse.data;
    }catch(e){
        console.error(e)
        return undefined;
    }
}

export async function associadoPagarAssociacaoService(pagamentoAssociacao){
    let url = associadoPagarAssociacaoAPI()
    try{
        let axiosResponse = await axios
            .post(url,{
                ...pagamentoAssociacao
                },
                {headers:{Authorization: localStorage.getItem("token")}}
            );
        return axiosResponse.status === 200;
    }catch(e){
        console.error(e)
        return false;
    }
}

export async function associadoGetCartaoCreditoService(idAssociado){
    let url = associadoCartaoAssociadoAPI(idAssociado)
    try{
        let axiosResponse = await axios
            .get(url,
                {headers:{Authorization: localStorage.getItem("token")}}
            );
        return axiosResponse.data;
    }catch(e){
        console.error(e)
        return undefined;
    }
}

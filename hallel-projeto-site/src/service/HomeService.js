import {
    homeListarCursos,
    homeListarDesCursoByIdCurso,
    homeLogin,
    homeMatricularParticipanteInCursoByIdUserAndIdCurso,
    homeSolicitarCadastro,
    homeVerificarToken,
    listarEventosDestacadosHomeAPI,
    listarEventosSemDestaqueHomeAPI
} from "../api/uris/HomeUris";
import axios from "axios";
import {membroLoadPerfilById} from "../api/uris/MembroURLS";
import {associadoListarPerfil} from "../api/uris/AssociadosURLS";

export async function solicitarCadastroService(cadastro) {
    let url = homeSolicitarCadastro();
    try {
        let axiosResponse = await axios.post(url, {...cadastro});
        return axiosResponse.status === 200
    } catch (e) {
        console.error(e)
        return false;
    }
}

export async function loginService(login) {
    let url = homeLogin()
    try {
        let axiosResponse = await axios
            .post(url, {...login}, {headers: {Authorization: localStorage.getItem("token")}});
        return axiosResponse.data;
    } catch (e) {
        console.error(e);
        return false;
    }
}

export async function listarCursosService() {
    let url = homeListarCursos()
    try {
        let axiosResponse = await axios
            .get(url, {headers: {Authorization: localStorage.getItem("token")}});
        return axiosResponse.data;
    } catch (e) {
        console.error(e)
        return [];
    }
}

export async function listarCursosById(idCurso) {
    let url = homeListarDesCursoByIdCurso(idCurso)
    try {
        let axiosResponse = await axios
            .get(url,
                {headers: {Authorization: localStorage.getItem("token")}}
            );
        return axiosResponse.data;
    } catch (e) {
        console.error(e)
        return undefined;
    }
}

export async function matricularParticipanteCursoService(idHallel, idCurso) {
    let url = homeMatricularParticipanteInCursoByIdUserAndIdCurso(idHallel, idCurso);
    try {
        let axiosResponse = await axios
            .post(url, {},
                {headers: {Authorization: localStorage.getItem("token")}}
            );
        return axiosResponse.status === 200;
    } catch (e) {
        console.error(e)
        return false;
    }
}

export async function verificarTokenService(token) {
    let url = homeVerificarToken(token);
    try {
        let axiosResponse = await axios
            .get(url,
                {headers: {Authorization: localStorage.getItem("token")}}
            );
        return axiosResponse.data;
    } catch (e) {
        console.error(e)
        return false;
    }
}

export async function listarEventoSemDestaqueService(){
    let url = listarEventosSemDestaqueHomeAPI()
    try{
        return (await axios
            .get(url,
                {headers: {Authorization: localStorage.getItem("token")}}
            )).data;
    }catch(e){
        console.error(e)
        return []
    }
}

export async function listarEventoComDestaqueService() {
    let url = listarEventosDestacadosHomeAPI()
    try{
        return (await axios
            .get(url,
                {headers: {Authorization: localStorage.getItem("token")}}
            )).data;
    }catch(e){
        console.error(e)
        return []
    }
}

export async function loadPerfil(idUser, roles) {
    let url = "";
    let isMembro = false;
    let isAssociado = false;
    if (roles.includes("ROLE_USER") && roles.includes("ROLE_ASSOCIADO")) {
        url = associadoListarPerfil(localStorage.getItem("HallelId"));
        isAssociado = true;
    } else if (roles.includes("ROLE_USER")) {
        url = membroLoadPerfilById(localStorage.getItem("HallelId"));
        isMembro = true;
    }
    try {
        let axiosResponse = await axios
            .get(url,
                {headers: {Authorization: localStorage.getItem("token")}}
            );
        return {
            isMembro: isMembro,
            isAssociado: isAssociado,
            data: axiosResponse.data,
        };
    } catch (e) {
        console.error(e)
        return undefined;
    }
}
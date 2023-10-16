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
    return await axios.post
    (url, {cadastro},
        {headers: {Authorization: localStorage.getItem("token")}})
        .then((res) => {
            return res.status === 200;
        })
        .catch((e) => {
            console.error(e)
            return false;
        })
}

export async function loginService(login) {
    let url = homeLogin()
    return await axios.post
    (url, {...login})
        .then((res) => {
            let rolesName = [];
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("HallelId", res.data.objeto.id);
            res.data.objeto.roles.map((role) => {
                rolesName.push(role.name);
            });
            localStorage.setItem("R0l3s", rolesName);
            return true;
        })
        .catch((e) => {
            console.error(e)
            return false;
        })
}

export async function listarCursosService() {
    let url = homeListarCursos()
    return await axios.get
    (url,
        {headers: {Authorization: localStorage.getItem("token")}})
        .then((res) => {
            return res.data;
        })
        .catch((e) => {
            console.error(e)
            return []
        })
}

export async function listarCursosById(idCurso) {
    let url = homeListarDesCursoByIdCurso(idCurso)
    return await axios.get
    (url,
        {headers: {Authorization: localStorage.getItem("token")}})
        .then((res) => {
            return res.data;
        })
        .catch((e) => {
            console.error(e)
            return undefined;
        })
}

export async function matricularParticipanteCursoService(idHallel, idCurso) {
    let url = homeMatricularParticipanteInCursoByIdUserAndIdCurso(idHallel, idCurso);
    return await axios.post
    (url,
        {headers: {Authorization: localStorage.getItem("token")}})
        .then((res) => {
            return res.status === 200;
        })
        .catch((e) => {
            console.error(e)
            return false;
        })
}

export async function verificarTokenService(token) {
    let url = homeVerificarToken(token);
    return await axios.get(url,
        {headers: {Authorization: localStorage.getItem("token")}})
        .then((res) => {
            return res.data;
        })
        .catch((e) => {
            console.error(e)
            return false
        })
}

export async function listarEventoSemDestaqueService() {
    let url = listarEventosSemDestaqueHomeAPI()
    return await axios
        .get(url,
            {headers: {Authorization: localStorage.getItem("token")}}
        ).then((res) => {
            return res.data;
        }).catch((error) => {
            console.log(error)
            return [];
        });
}

export async function listarEventoComDestaqueService() {
    let url = listarEventosDestacadosHomeAPI();
    return await axios.get(url,
            {headers: {Authorization: localStorage.getItem("token")}})
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.error(error);
            return [];
        });
}

export async function loadPerfilService(idUser, roles) {
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
    return await axios.get
    (url,
        {headers: {Authorization: localStorage.getItem("token")}})
        .then((res) => {
            return {
                isMembro: isMembro,
                isAssociado: isAssociado,
                data: res.data
            };
        })
        .catch((e) => {
            console.error(e)
            return undefined
        })
}
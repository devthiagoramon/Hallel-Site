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

export function solicitarCadastroService(cadastro) {
    let url = homeSolicitarCadastro();
    let response = false
    axios.post
    (url,
        {headers: {Authorization: localStorage.getItem("token")}})
        .then((res) => {
            response = res.status
            return response === 200;
        })
        .catch((e) => {
            console.error(e)
        })
    return response;
}

export async function loginService(login) {
    let url = homeLogin()
    try {
        let response = (await axios.post
        (url, {...login})).data;
        let rolesName = [];
        localStorage.setItem("token", response.token);
        localStorage.setItem("HallelId", response.objeto.id);
        response.objeto.roles.map((role) => {
            rolesName.push(role.name);
        });
        localStorage.setItem("R0l3s", rolesName);
        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
    // .then((res) => {
    //     let rolesName = [];
    //     localStorage.setItem("token", res.data.token);
    //     localStorage.setItem("HallelId", res.data.objeto.id);
    //     res.data.objeto.roles.map((role) => {
    //         rolesName.push(role.name);
    //     });
    //     localStorage.setItem("R0l3s", rolesName);
    //     return true;
    // })
    // .catch((e) => {
    //     console.error(e)
    //     return false;
    // })

}

export function listarCursosService() {
    let url = homeListarCursos()
    let response = []
    axios.get
    (url,
        {headers: {Authorization: localStorage.getItem("token")}})
        .then((res) => {
            response = res.data
            return response;
        })
        .catch((e) => {
            console.error(e)
        })
    return response;
}

export function listarCursosById(idCurso) {
    let url = homeListarDesCursoByIdCurso(idCurso)
    let response = undefined
    axios.get
    (url,
        {headers: {Authorization: localStorage.getItem("token")}})
        .then((res) => {
            response = res.data
            return response;
        })
        .catch((e) => {
            console.error(e)
        })
    return response;
}

export function matricularParticipanteCursoService(idHallel, idCurso) {
    let url = homeMatricularParticipanteInCursoByIdUserAndIdCurso(idHallel, idCurso);
    let response = false
    axios.post
    (url,
        {headers: {Authorization: localStorage.getItem("token")}})
        .then((res) => {
            response = res.status
            return response === 200;
        })
        .catch((e) => {
            console.error(e)
        })
    return response;
}

export function verificarTokenService(token) {
    let url = homeVerificarToken(token);
    let response = false
    axios.get
    (url,
        {headers: {Authorization: localStorage.getItem("token")}})
        .then((res) => {
            response = res.data
            return response;
        })
        .catch((e) => {
            console.error(e)
        })
    return response;
}

export function listarEventoSemDestaqueService() {
    let url = listarEventosSemDestaqueHomeAPI()
    let response = [];
    axios
        .get(url,
            {headers: {Authorization: localStorage.getItem("token")}}
        ).then((res) => {
        response = res.data;
    }).catch((error) => {
        console.log(error)
        response = [];
    });
    return response;
}

export function listarEventoComDestaqueService() {
    let url = listarEventosDestacadosHomeAPI()
    let response = [];
    axios
        .get(url,
            {headers: {Authorization: localStorage.getItem("token")}}
        ).then((res) => {
        response = res.data
    }).catch((error) => {
        console.error(error);
    });
    return response;
}

export function loadPerfil(idUser, roles) {
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
    axios.get
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
        })
    return undefined;
}
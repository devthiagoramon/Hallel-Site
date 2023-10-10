import {
    homeListarCursos,
    homeListarDesCursoByIdCurso,
    homeLogin,
    homeMatricularParticipanteInCursoByIdUserAndIdCurso,
    homeSolicitarCadastro, homeVerificarToken, listarEventosDestacadosHomeAPI, listarEventosSemDestaqueHomeAPI
} from "../api/uris/HomeUris";
import axios from "axios";

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

export async function matricularParticipanteCursoService(idHallel, idCurso){
    let url = homeMatricularParticipanteInCursoByIdUserAndIdCurso(idHallel, idCurso);
    try{
        let axiosResponse = await axios
                  .post(url, {},
                                {headers:{Authorization: localStorage.getItem("token")}}
                            );
        return axiosResponse.status === 200;
    }catch(e){
        console.error(e)
        return false;
    }
}

export async function verificarTokenService(token){
    let url = homeVerificarToken(token);
    try{
        let axiosResponse = await axios
                  .get(url,
                                {headers:{Authorization: localStorage.getItem("token")}}
                            );
        return axiosResponse.data;
    }catch(e){
        console.error(e)
        return false;
    }
}

export async function listarEventoSemDestaqueService(){
    let url = listarEventosSemDestaqueHomeAPI()
    try{
        let axiosResponse = await axios
                  .get(url,
                                {headers:{Authorization: localStorage.getItem("token")}}
                            );
        return axiosResponse.data;
    }catch(e){
        console.error(e);
        return [];
    }
}

export async function listarEventoComDestaqueService(){
    let url = listarEventosDestacadosHomeAPI()
    try{
        let axiosResponse = await axios
                  .get(url,
                                {headers:{Authorization: localStorage.getItem("token")}}
                            );
        return axiosResponse.data;
    }catch(e){
        console.error(e)
        return [];
    }
}
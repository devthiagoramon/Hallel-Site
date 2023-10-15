import {cursoCriar, cursoEditarById, cursoGetParticipantes, cursoListarById} from "../api/uris/CursosURLS";
import axios from "axios";

export async function cursoCriarService(cursoNew) {
    let url = cursoCriar()
    try {
        let axiosResponse = await axios
            .post(url, {cursoNew},
                {headers: {Authorization: localStorage.getItem("token")}}
            );
        return axiosResponse.status === 200;
    } catch (e) {
        console.error(e)
        return false;
    }
}

export async function cursoGetParticipantesService(idCurso) {
    let url = cursoGetParticipantes(idCurso);
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

export async function cursoListarPorIdService(idCurso){
    let url = cursoListarById(idCurso)
    try{
        let axiosResponse = await axios
                  .get(url ,
                                {headers:{Authorization: localStorage.getItem("token")}}
                            );
        return axiosResponse.data;
    }catch(e){
        console.error(e);
        return undefined;
    }
}

export async function cursoEditarPorIdService(idCurso, cursoNew){
    let url = cursoEditarById(idCurso)
    try{
        let axiosResponse = await axios
                  .put(url, {cursoNew} ,
                                {headers:{Authorization: localStorage.getItem("token")}}
                            );
        return axiosResponse.status === 200;
    }catch(e){
        console.error(e);
        return false;
    }
}
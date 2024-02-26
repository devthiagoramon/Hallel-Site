import {cursoCriar, cursoEditarById, cursoGetParticipantes, cursoListarById} from "../api/uris/CursosURLS";
import axios from "axios";
import { getToken } from "../utils/utilToken";

export async function cursoCriarService(cursoNew) {
    let url = cursoCriar()
    let response = false
    return await axios.post
    (url,
        {headers: {Authorization: getToken()}})
        .then((res) => {
            response = res.status;
            return response === 200;
        })
        .catch((e) => {
            console.error(e)
            return response;
        })
}

export function cursoGetParticipantesService(idCurso) {
    let url = cursoGetParticipantes(idCurso);
    let response = []
    axios.get
    (url,
        {headers: {Authorization: getToken()}})
        .then((res) => {
            response = res.data;
            return response;
        })
        .catch((e) => {
            console.error(e)
        })
    return response;
}

export function cursoListarPorIdService(idCurso) {
    let url = cursoListarById(idCurso);
    let response = undefined
    axios.get
    (url,
        {headers: {Authorization: getToken()}})
        .then((res) => {
            response = res.data;
            return response;
        })
        .catch((e) => {
            console.error(e)
        })
    return response;
}

export function cursoEditarPorIdService(idCurso, cursoNew) {
    let url = cursoEditarById(idCurso)
    let response = false
    axios.put
    (url,
        {headers: {Authorization: getToken()}})
        .then((res) => {
            response = res.status
            return response === 200;
        })
        .catch((e) => {
            console.error(e)
        })
    return response;
}
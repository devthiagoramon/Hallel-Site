import {
    membroLoadPerfilById,
    membrosListar,
    verifyMembroParticiparEvento,
    virarAssociadoAPI
} from "../api/uris/MembroURLS";
import axios from "axios";

export async function membroListarAdmService(){
    let url = membrosListar()
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

export async function virarAssociadoService(virarAssociado){
    let url = virarAssociadoAPI();
    try{
        let axiosResponse = await axios
                  .post(url, {...virarAssociado},
                                {headers:{Authorization: localStorage.getItem("token")}}
                            );
        return axiosResponse.status === 200;
    }catch(e){
        console.error(e)
        return false;
    }
}

export async function verifyMembroParticiparEventoService(iduser){
    let url = verifyMembroParticiparEvento(iduser);
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
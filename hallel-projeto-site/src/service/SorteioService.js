import {sorteioListarAllAPI, sorteioMesAtual} from "../api/uris/SorteioURIs";
import axios from "axios";
import { getToken } from "../utils/utilToken";

export async function sorteioListarService(){
    let url = sorteioListarAllAPI()
    try{
        let axiosResponse = await axios
                  .get(url,
                                {headers:{Authorization: getToken()}}
                            );
        return axiosResponse.data;
    }catch(e){
        console.error(e)
        return [];
    }
}

export async function sorteioMesAtualService(){
    let url = sorteioMesAtual();
    try{
        let axiosResponse = await axios
                  .get(url,
                                {headers:{Authorization: getToken()}}
                            );
        return axiosResponse.data;
    }catch(e){
        console.error(e)
        return undefined;
    }
}
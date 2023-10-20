import {sorteioListarAllAPI, sorteioMesAtual} from "../api/uris/SorteioURIs";
import axios from "axios";

export async function sorteioListarService(){
    let url = sorteioListarAllAPI()
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

export async function sorteioMesAtualService(){
    let url = sorteioMesAtual();
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
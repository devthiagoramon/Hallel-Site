import { administradorPrefix, uriDefaultPrefix } from "./utilsURI";

export function sorteioListarAllAPI() {
  return uriDefaultPrefix()+administradorPrefix()+"/sorteios";
}

export function sorteioMesAtual(){

  return uriDefaultPrefix()+administradorPrefix()+"/sorteios/mesAtual";
}

export function sorteioSortearAPI(){
}
import { administradorPrefix, uriDefaultPrefix } from "./utilsURI";

export function sorteioListarAllAPI() {
  return uriDefaultPrefix()+administradorPrefix()+"/sorteios";
}

export function sorteioSortearAPI(){
  return uriDefaultPrefix()+administradorPrefix()+"/sorteios/create"
}
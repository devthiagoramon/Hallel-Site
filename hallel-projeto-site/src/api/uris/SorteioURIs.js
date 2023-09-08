import { administradorPrefix, uriDefaultPrefix } from "./utilsURI";

export function sorteioListarAllAPI() {
  return uriDefaultPrefix()+administradorPrefix()+"/sorteios";
}

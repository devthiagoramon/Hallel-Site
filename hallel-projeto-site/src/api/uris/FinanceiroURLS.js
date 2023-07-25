import { doacaoPrefix, financeiroPrefix, uriDefaultPrefix } from "./utilsURI";

export function associadosListAPI() {
  return uriDefaultPrefix() + "/associados";
}

/*
    Parte de doações (Financeiro)
*/

export function doacaoListarTodosAPI() {
  return uriDefaultPrefix() + doacaoPrefix() + "/list";
}

export function doacaoListarDiaAPI() {
  return uriDefaultPrefix() + doacaoPrefix() + "/list/thisDay";
}

export function doacaoListarSemanaAPI() {
  return uriDefaultPrefix() + doacaoPrefix() + "/list/thisWeek";
}

export function doacaoListarObjetosAPI() {
  return uriDefaultPrefix() + doacaoPrefix() + "/listObjetos";
}

export function doacaoListarObjetoIdAPI(idObjetoDoacao) {
  return uriDefaultPrefix() + doacaoPrefix() + "/objeto/" + idObjetoDoacao;
}

export function doacaoObjetoRecebidoAPI(idObjetoDoacao) {
  return (
    uriDefaultPrefix() + doacaoPrefix() + "/" + idObjetoDoacao + "/recebido"
  );
}

export function doacaoObjetoNaoRecebidoAPI(idObjetoDoacao) {
  return (
    uriDefaultPrefix() + doacaoPrefix() + "/" + idObjetoDoacao + "/naoRecebido"
  );
}

export function doacaoDoarObjetoAPI() {
  return uriDefaultPrefix() + doacaoPrefix() + "/doarObjeto";
}

/*
    Parte de gastos (Financeiro)
    !! DEPRECIADO !!
*/

export function gastosListarAPI() {
  return uriDefaultPrefix() + financeiroPrefix() + "/gastos";
}
export function gastosListarDiaAPI() {
  return uriDefaultPrefix() + financeiroPrefix() + "/gastos/thisDay";
}
export function gastosListarSemanaAPI() {
  return uriDefaultPrefix() + financeiroPrefix() + "/gastos/thisWeek";
}
export function gastosUltimasSaidasAPI() {
  return uriDefaultPrefix() + financeiroPrefix() + "/ultimasSaida";
}
export function gastosDeletarGastosAPI(idSaida) {
  return uriDefaultPrefix() + financeiroPrefix() + "/gasto/deletar/" + idSaida;
}

export function gastosCriar() {
  return uriDefaultPrefix() + financeiroPrefix() + "/gasto/criar";
}

/*
    Parte de saidas (Financeiro)
*/

export function saidaListarCodigoSaidaAPI(codigo) {
  return (
    uriDefaultPrefix() +
    financeiroPrefix() +
    "/codigosSaida/" +
    codigo +
    "/list"
  );
}

export function saidaListarCodigosSaidass() {
  return uriDefaultPrefix() + financeiroPrefix() + "/codigosSaida/list";
}

export function saidaAdicionarCodigoSaida() {
  return uriDefaultPrefix() + financeiroPrefix() + "/codigosSaida/adicionar";
}


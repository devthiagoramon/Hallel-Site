import { doacaoPrefix, financeiroPrefix, uriDefaultPrefix } from "./utilsURI";

/*
    Associados (Financeiro)
*/

export function associadosListAPI() {
  return uriDefaultPrefix() + "/associados";
}

export function associadosGetAllPagamentosAPI() {
  return uriDefaultPrefix() + "/getAllPagamentos";
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

export function gastosCriarAPI() {
  return uriDefaultPrefix() + financeiroPrefix() + "/gasto/criar";
}

/*
    Parte de receitas (Financeiro)
    !! DEPRECIADO !!
*/

export function receitasListarAPI() {
  return uriDefaultPrefix() + financeiroPrefix() + "/receita";
}
export function receitasListarDiaAPI() {
  return uriDefaultPrefix() + financeiroPrefix() + "/receita/thisDay";
}
export function receitasListarSemanaAPI() {
  return uriDefaultPrefix() + financeiroPrefix() + "/receita/thisWeek";
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

export function saidaListarCodigosSaidasAPI() {
  return uriDefaultPrefix() + financeiroPrefix() + "/codigosSaida/list";
}

export function saidaAdicionarCodigoSaidaAPI() {
  return uriDefaultPrefix() + financeiroPrefix() + "/codigosSaida/adicionar";
}

/*
    Parte de entradas (Financeiro)
*/

export function entradasUltimasEntradasAPI() {
  return uriDefaultPrefix() + financeiroPrefix() + "/ultimasEntradas";
}

export function entradasGetEntradasMesValorAPI(mes, ano) {
  return (
    uriDefaultPrefix() +
    financeiroPrefix() +
    "/entradasMes/valor" +
    "?mes=" +
    mes +
    "&ano=" +
    ano
  );
}

/*
    Parte de meta mensal (Financeiro)
*/

export function metaLoadPorcentagemByMesAnoAPI(mes, ano) {
  return (
    uriDefaultPrefix() +
    financeiroPrefix() +
    "/meta/porcentagem" +
    "?mes=" +
    mes +
    "&ano=" +
    ano
  );
}
export function metaListarByMesAnoAPI(mes, ano) {
  return (
    uriDefaultPrefix() +
    financeiroPrefix() +
    "/meta/listar" +
    "?mes=" +
    mes +
    "&ano=" +
    ano
  );
}
export function metaAlterarByMesAnoAPI(mes, ano, metaAtualizada) {
  return (
    uriDefaultPrefix() +
    financeiroPrefix() +
    "/meta/alterar" +
    "?mes=" +
    mes +
    "&ano=" +
    ano +
    "&meta=" +
    metaAtualizada
  );
}

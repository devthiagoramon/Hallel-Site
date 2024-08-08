export type TipoDoacaoAdm = "dinheiro" | "objeto";
export type TipoDoadoresAdm = "anonimo" | "membro";
export type TipoOcasiaoAdm = "nenhum" | "evento" | "retiro";
export type StatusDoacaoAdm = "pendente" | "finalizado" | "entregue";

export enum StatusDoacao {
  ERROR = "ERROR",
  PENDENTE = "PENDENTE",
  FINALIZADO = "FINALIZADO",
  ENTREGUE = "ENTREGUE",
}

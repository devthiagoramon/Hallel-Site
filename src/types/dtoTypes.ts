import { LocalEvento } from "./hallelTypes";
import { ReduxUser } from "./reduxTypes";

export interface SignInDTO {
  email: string;
  senha: string;
  confirmarSenha: string;
  nome: string;
}

export interface SignUpDTO {
  email: string;
  senha: string;
}

export interface EditProfileDTO extends ReduxUser {
  image?: string;
}

export interface ListEventsDTO {
  id: string;
  titulo: string;
  date: Date;
  localEvento?: LocalEvento;
  imagem: string;
}

export interface ListSorteadosDTO {
  image: string;
  nome: string;
  nomePremio: string;
}

export interface EventDTO {
  id: string
  associadoParcipando: null
  descricao: string
  quantidadeMembros: number
  maxMembros: number
  titulo: string
  integrantes: null
  membroMarketing: null
  administrador: null
  date: string
  localEvento?: LocalEvento
  horario: string
  imagem: string | null
  participantesEspeciais: null
  destaque: boolean
  palestrantes: string[]
  pagamentoEntradaEventos: null
  doacaoDinheiroEventos: null
  doacaoObjetosEventos: null
  valorDoEvento: number |  null
  valorDescontoAssociado: null
  valorDescontoMembro: null
  banner?: string | null
}

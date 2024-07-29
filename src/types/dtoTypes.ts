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

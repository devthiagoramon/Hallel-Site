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

export interface EditProfileDTO extends ReduxUser {}

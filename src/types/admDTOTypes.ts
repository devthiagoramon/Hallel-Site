import { StatusDoacao } from "./admTypes";
import { LocalEvento } from "./hallelTypes";

export interface LoginAdmDTO {
  email: string;
  senha: string;
}

export interface ListEventsAdmDTO {
  id: string;
  titulo: string;
  descricao: string;
  date: Date;
  imagem: string;
  banner: string;
  localEvento: LocalEvento;
  destaque: boolean;
  horario: string;
  palestrantes: string[];
  valorDoEvento: number;
}

export interface LocationMapType {
  lat?: number;
  lng?: number;
}

export interface AddEditEventAdmDTO {
  titulo: string;
  descricao: string;
  date: Date;
  localEvento: LocalEvento;
  imagem: string;
  banner: string;
  destaque: boolean;
  valorDoEvento?: string;
}

export interface MembroResponseListDTO {
  id: string;
  nome: string;
  email: string;
  imagem: string;
}

export interface DoacaoObjetoDTO {
  nameObject: string;
  quantidade: number;
}

export interface CriarDoacaoDTO {
  isAnonimo?: boolean;
  idDonator?: string;
  nameDonator?: string;
  telefoneDonator?: string;
  emailDonator?: string;
  valor?: number;
  date?: Date;
  dateEntregue?: Date;
  isObjeto?: boolean;
  nameObjeto?: string;
  status?: StatusDoacao;
  idEvento?: string;
  idRetiro?: string;
}

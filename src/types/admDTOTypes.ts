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

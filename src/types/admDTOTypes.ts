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
  localEvento: LocalEvento;
  destaque: boolean;
  horario: string;
  palestrantes: string[];
}

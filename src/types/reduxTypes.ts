import { ListDoacaoDTO } from "./admDTOTypes";

export interface ReduxUser {
  id: string;
  name: string;
  email: string;
  photo: string;
  cpf: string;
  dataNascimento: string;
  telefone: string;
}

export interface ReduxAdmDonation {
  selectedDonation: ListDoacaoDTO;
}

export interface ReduxStore {
  user: ReduxUser;
  adm_donation: ReduxAdmDonation;
}

export interface ReduxUser {
  id: string;
  name: string;
  email: string;
  photo: string;
  cpf: string;
  dataNascimento: string;
  telefone: string;
}

export interface ReduxStore {
  user: ReduxUser;
}

export interface ReduxUser {
  id: string;
  name: string;
  email: string;
  photo: string;
}

export interface ReduxStore {
  user: ReduxUser;
}

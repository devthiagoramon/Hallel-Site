
export interface ReduxUser {
    name: string,
    email: string,
    photo: string,
}

export interface ReduxStore {
    user: ReduxUser
}
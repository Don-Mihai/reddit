export interface IUser {
    id: number;
    username: string;
    birthdate: string;
    email: string;
    password: string;
    avatarUrl: string;
}

export interface PCreateUser {
    email: string;
    username: string;
    password: string;
}

export interface PAuthUser {
    username: string;
    password: string;
}

export interface UserState {
    usersList: [];
    currentUser: IUser;
    isUserAuth: boolean;
}

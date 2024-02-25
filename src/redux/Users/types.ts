export interface IUser {
    id: number;
    username: string;
    email: string;
    password: string;
    avatarUrl: string;
}
export interface CounterState {
    users: IUser[];
}

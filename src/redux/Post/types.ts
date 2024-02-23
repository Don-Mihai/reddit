import { IUser } from '../Users/types';

export interface IPost {
    id: number | string;
    author: IUser;
    title: string;
    text: string;
    contentUrl: string;
    createDate: string;
    countLike: number;
    countRepost: number;
    countComment: number;
}
export interface PCreatePost {
    contentUrl: string;
    title: string;
    text: string;
}

export interface CounterState {
    value: number;
    posts: IPost[];
    id: IPost[];
}

interface IUser {
    id: number;
    name: string;
    avatarUrl: string;
}

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

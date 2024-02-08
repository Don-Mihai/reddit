interface IUser {
    id: number;
    name: string;
    avatarUrl: string;
}

export interface IPost {
    author: IUser;
    title: string;
    text: string;
    contentUrl: string;
    createDate: string;
}

export const posts = [
    {
        author: {
            id: 1,
            name: 'Doctor Strange',
            avatarUrl: '',
        },
        title: 'How to create magic?',
        text: 'You can make a spell with this recipe.',
        contentUrl: '',
        createDate: '',
    },
];

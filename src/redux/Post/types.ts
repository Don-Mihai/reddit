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
  category: string;
}
export interface PCreatePost {
  contentUrl: string;
  title: string;
  text: string;
  author: IUser;
}

export interface PostState {
  isLoading: boolean;
  posts: IPost[];
  id: IPost[];
  post: IPost;
}

export const categories = [
  'Home tasks',
  'Work',
  'Study',
  'Personal goals',
  'Health',
  'Finances',
  'Leisure and entertainment',
  'Shopping',
  'Family and friends',
  'Beauty and health',
  'Car',
  'Travel',
  'Hobbies',
  'Charity',
  'Agriculture',
  'Pets',
  'Garden and yard',
  'Repair and construction',
  'Sports',
  'Education',
  'Career',
  'Reading',
  'Music',
  'Movies and TV',
  'Games',
  'Internet and technology',
  'Languages',
  'Skills',
  'Family',
  'Friends',
  'Events',
  'Birthdays',
  'Holidays',
  'Other',
];

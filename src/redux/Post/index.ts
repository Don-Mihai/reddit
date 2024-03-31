import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PostState, IPost, PCreatePost } from './types';

import axios from 'axios';

const initialState: PostState = {
  isLoading: false,
  posts: [],
  id: [],
  post: {
    id: '',
    author: {
      id: 0,
      username: '',
      birthdate: '',
      email: '',
      password: '',
      avatarUrl: '',
    },
    title: '',
    text: '',
    contentUrl: '',
    createDate: '',
    countLike: 0,
    countRepost: 0,
    countComment: 0,
  },
};

export const postSlice = createSlice({
  name: 'Post',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(get.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(get.fulfilled, (state, action) => {
      state.posts = action.payload as IPost[];
      state.isLoading = false;
    });
    builder.addCase(getOnePost.fulfilled, (state, action) => {
      state.post = action.payload as IPost;
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      const deletedPostId = action.payload as string;
      state.posts = state.posts.filter((post) => post.id !== deletedPostId);
    });
    builder.addCase(add.fulfilled, (state, action) => {
      state.posts.push(action.payload as IPost);
    });
    builder.addCase(saveChangesAsync.fulfilled, (state, action) => {
      const { updatedPost } = action.payload;
      state.posts = state.posts.map((post) => (post.id === updatedPost.id ? (updatedPost as IPost) : post));
    });
    builder.addCase(likePost.fulfilled, (state, action) => {
      const updatedPost = action.payload as IPost;
      state.posts = state.posts.map((post) => (post.id === updatedPost.id ? updatedPost : post));
    });
    builder.addCase(dislikePost.fulfilled, (state, action) => {
      const updatedPost = action.payload as IPost;
      state.posts = state.posts.map((post) => (post.id === updatedPost.id ? updatedPost : post));
    });
  },
});

// Action creators are generated for each case reducer function
// export const {} = postSlice.actions;

export default postSlice.reducer;

export const get = createAsyncThunk('post/get', async (): Promise<IPost[]> => {
  const posts = (await axios.get('http://localhost:3001/posts')).data;

  return posts;
});
export const getOnePost = createAsyncThunk('post/getOnePost', async (postId: number | string | null): Promise<IPost> => {
  const post = (await axios.get(`http://localhost:3001/posts/${postId}`)).data;
  return post;
});

export const deletePost = createAsyncThunk('post/delete', async (postId: number | string): Promise<string | number> => {
  await axios.delete(`http://localhost:3001/posts/${postId}`);

  return postId;
});

export const add = createAsyncThunk('post/post', async (payload: PCreatePost): Promise<IPost> => {
  const post = (await axios.post('http://localhost:3001/posts', payload)).data;

  return post;
});

export const saveChangesAsync = createAsyncThunk('post/saveChanges', async (data: { formValues: any; postId: string | number }) => {
  const { formValues, postId } = data;
  await axios.put(`http://localhost:3001/posts/${postId}`, formValues);
  const updatedPost = (await axios.get(`http://localhost:3001/posts/${formValues.id}`)).data;

  return { updatedPost };
});

export const likePost = createAsyncThunk('post/like', async (postId: number | string): Promise<IPost> => {
  const response = await axios.patch(`http://localhost:3001/posts/${postId}/like`);
  return response.data;
});

export const dislikePost = createAsyncThunk('post/dislike', async (postId: number | string): Promise<IPost> => {
  const response = await axios.patch(`http://localhost:3001/posts/${postId}/dislike`);
  return response.data;
});

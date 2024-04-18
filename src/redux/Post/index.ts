import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PostState, IPost, PCreatePost } from './types';
import axios from 'axios';
import OpenAI from 'openai';

const openaiKey = process.env.REACT_APP_OPENAI_KEY || '';

const openai = new OpenAI({ apiKey: openaiKey, dangerouslyAllowBrowser: true, baseURL: 'https://cors-anywhere.herokuapp.com/https://api.openai.com/v1/' });

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
    category: '',
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

  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content:
            'You should categorize the post based on its content and context, examples are: Home tasks, Work, Study, Personal goals, Health, Finances, Leisure and entertainment, Shopping, Family and friends, Beauty and health, Car, Travel, Hobbies, Charity, Agriculture, Pets, Garden and yard, Repair and construction, Sports, Education, Career, Reading, Music, Movies and TV, Games, Internet and technology, Languages, Skills, Family, Friends, Events, Birthdays, Holidays, Other',
        },
        { role: 'user', content: payload.text },
      ],
      model: 'gpt-3.5-turbo',
    });

    // Получаем предсказанную категорию
    const predictedCategory = completion.choices[0].message?.content;

    const editedPost = (
      await axios.put(`http://localhost:3001/posts/${post.id}`, {
        ...post,
        category: predictedCategory,
      })
    ).data;

    return editedPost;
  } catch (error) {
    return post;
  }
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

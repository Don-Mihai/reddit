import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CounterState, IPost, PCreatePost } from './types';
import axios from 'axios';

const initialState: CounterState = {
    value: 0,
    posts: [],
    id: [],
};

export const counterSlice = createSlice({
    name: 'Post',
    initialState,
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(get.fulfilled, (state, action) => {
            state.posts = action.payload;
        });
        builder.addCase(deletePost.fulfilled, (state, action) => {
            const deletedPostId = action.payload;
            state.posts = state.posts.filter(post => post.id !== deletedPostId);
        });
        builder.addCase(add.fulfilled, (state, action) => {
            state.posts.push(action.payload);
        });
        builder.addCase(saveChangesAsync.fulfilled, (state, action) => {
            const { updatedPost } = action.payload;
            state.posts = state.posts.map(post => (post.id === updatedPost.id ? updatedPost : post));
        });
    },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;

export const get = createAsyncThunk('post/get', async (): Promise<IPost[]> => {
    const posts = (await axios.get('http://localhost:3001/posts')).data;

    return posts;
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

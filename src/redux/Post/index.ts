import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CounterState, IPost } from './types';
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
    },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;

export const get = createAsyncThunk('post/get', async (): Promise<IPost[]> => {
    const posts = (await axios.get('http://localhost:3001/posts')).data;

    return posts;
});

export const deletePost = createAsyncThunk('post/delete', async (postId: number | string) => {
    await axios.delete(`http://localhost:3001/posts/${postId}`);
    
    return postId;
});

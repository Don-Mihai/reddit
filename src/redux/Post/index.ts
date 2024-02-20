import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CounterState, IPost } from './types';
import axios from 'axios';

const initialState: CounterState = {
    value: 0,
    posts: [],
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
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;

export const get = createAsyncThunk('post/get', async (): Promise<IPost[] | undefined> => {
    const posts = (await axios.get('http://localhost:3001/posts')).data;

    return posts;
});

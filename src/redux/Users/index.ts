import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CounterState, IUser } from './types';
import axios from 'axios';

const initialState: CounterState = {
    users: [],
};

export const counterSlice = createSlice({
    name: 'Users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(regUser.fulfilled, (state, action) => {
            state.users.push(action.payload);
        });
    },
});

// Action creators are generated for each case reducer function

export default counterSlice.reducer;

export const regUser = createAsyncThunk('users/regUser', async (payload: IUser): Promise<IUser> => {
    const user = (await axios.post('http://localhost:3001/users', payload)).data;

    return user;
});

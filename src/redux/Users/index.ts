import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { UserState, IUser, PCreateUser } from './types';
import axios from 'axios';

const initialState: UserState = {
    currentUser: {} as IUser,
};

export const counterSlice = createSlice({
    name: 'Users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(regUser.fulfilled, (state, action) => {
                state.currentUser = action.payload;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.currentUser = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function

export default counterSlice.reducer;

export const regUser = createAsyncThunk('users/regUser', async (payload: PCreateUser): Promise<IUser> => {
    const user = (await axios.post('http://localhost:3001/users', payload)).data;

    localStorage.setItem('userId', user.id);
    return user;
});

export const getById = createAsyncThunk('users/getByIdUser', async (userId: number | string | null): Promise<IUser> => {
    const user = (await axios.get(`http://localhost:3001/users/${userId}`)).data;

    return user;
});

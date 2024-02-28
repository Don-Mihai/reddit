import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { UserState, IUser, PCreateUser, PAuthUser } from './types';
import axios from 'axios';

const initialState: UserState = {
    currentUser: {} as IUser,
    isUserAuth: false,
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
            })
            .addCase(authUser.fulfilled, (state, action) => {
                state.currentUser = action.payload;
            })
            .addCase(setUserAuth, (state, action) => {
                state.isUserAuth = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function

export default counterSlice.reducer;

export const setUserAuth = createAction<boolean>('users/setUserAuth');

export const regUser = createAsyncThunk('users/regUser', async (payload: PCreateUser): Promise<IUser> => {
    const user = (await axios.post('http://localhost:3001/users', payload)).data;

    localStorage.setItem('userId', user.id);
    return user;
});

export const getById = createAsyncThunk('users/getByIdUser', async (userId: number | string | null): Promise<IUser> => {
    const user = (await axios.get(`http://localhost:3001/users/${userId}`)).data;

    return user;
});

export const authUser = createAsyncThunk('users/authUser', async (payload: PAuthUser): Promise<IUser> => {
    const user = (await axios.get(`http://localhost:3001/users?username=${payload.username}&password=${payload.password}`)).data[0];
    if (user.id) {
        localStorage.setItem('userId', user.id);
    }

    return user;
});

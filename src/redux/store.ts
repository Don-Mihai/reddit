import { configureStore } from '@reduxjs/toolkit';
import post from './Post';
import users from './Users';

export const store = configureStore({
    reducer: {
        post,
        users,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

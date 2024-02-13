import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./features/auth/authSlice";
import { baseApi } from "./api/baseApi";

export const store = configureStore({
  reducer: {
    // for server state
    [baseApi.reducerPath]: baseApi.reducer,
    // for local state
    auth: authReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

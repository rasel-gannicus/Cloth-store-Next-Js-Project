import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./features/user/userApi";
import userReducer from "./features/user/userSlice";
import modalReducer from "./features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    userSlice: userReducer,
    modalSlice : modalReducer
  },
  middleware: (getDefaultMiddleWares) =>
    getDefaultMiddleWares().concat(userApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

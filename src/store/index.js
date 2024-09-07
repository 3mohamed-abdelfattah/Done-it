import { configureStore } from '@reduxjs/toolkit';
// Reducers
import todoReducer from './slices/TodoSlice';
import userReducer from './slices/AuthSlice';

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        user: userReducer,
    },
});
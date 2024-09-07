import { configureStore } from '@reduxjs/toolkit'

// Reducers
import TodoSlice from './slices/TodoSlice'


export const store = configureStore({
    reducer: {
        todo: TodoSlice,
    },
})
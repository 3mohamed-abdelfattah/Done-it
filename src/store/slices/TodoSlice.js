import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todoList: [],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push(action.payload); // Update todoList
        },
    },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
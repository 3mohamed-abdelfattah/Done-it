import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todo: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todo = action.payload
        },
    },
})

export const { addTodo } = todoSlice.actions
export default todoSlice.reducer
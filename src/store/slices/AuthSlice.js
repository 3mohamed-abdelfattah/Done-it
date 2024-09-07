import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
};

const userSlice = createSlice({
    name: 'user', // Ensure this matches the key in configureStore
    initialState,
    reducers: {
        setUserData: (state, action) => { // Include action parameter
            state.user = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setUserData } = userSlice.actions;

export default userSlice.reducer;

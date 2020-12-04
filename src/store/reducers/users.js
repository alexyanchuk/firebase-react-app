import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
};

const userSlice = createSlice({
    name: "userReducer",
    initialState,
    reducers: {
        addUser: (state, action) => {
            return [...state, action.payload];
        },
        clearUserData: () => initialState,
    },
});

export const {
    addUser,
    clearUserData,
} = userSlice.actions;

export default userSlice.reducer;

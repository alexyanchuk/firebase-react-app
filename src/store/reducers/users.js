import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
};

const usersSlice = createSlice({
    name: "usersReducer",
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
} = usersSlice.actions;

export default usersSlice.reducer;

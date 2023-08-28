import { createSlice } from "@reduxjs/toolkit";
import { Slice } from "../../constants";
import { SignUpUser } from "./AuthService";

const initialState = {
    newUser: [],
    loading: false,
    errorMessage: null,
    // authList: {},
};

const authSlice = createSlice({
    name: Slice.auth,
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(SignUpUser.pending, (state, action) => {
            state.loading = true;
            state.errorMessage = null;
        }),
        builder.addCase(SignUpUser.fulfilled, (state, action) => {
            state.newUser = action.payload;
            state.loading = false;
        });
        builder.addCase(SignUpUser.rejected, (state, action) => {
            state.loading = false;
            state.errorMessage = action.payload;
        });
       
    }
});

export const authReducer = authSlice.reducer;
export const authActions = { SignUpUser };

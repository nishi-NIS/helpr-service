import { createSlice } from "@reduxjs/toolkit";
import { Slice } from "../../constants";
import { SignUpUser } from "./AuthService";

const initialState = {
    newUser: undefined,
    loading: false,
    errorMessage: null,
    // authList: {},
};

const authSlice = createSlice({
    name: Slice.auth,
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(SignUpUser.fulfilled, (state, action) => {
            state.SignUpUser = action.payload;
            state.loading = false;
        });
        builder.addCase(SignUpUser.rejected, (state, action) => {
            state.loading = true;
            state.errorMessage = action.payload;
        });
        builder.addCase(SignUpUser.pending, (state, action) => {
            state.loading = true;
        })
    }
});

export const authReducer = authSlice.reducer;
export const authActions = { SignUpUser };

import { createAsyncThunk } from "@reduxjs/toolkit";
import { ActionTypes, EndPoints } from "../../constants";
import { API_URL } from "../../config";
import { APIConfig } from "../../config/APIConfig";

export const SignUpUser = createAsyncThunk(
    ActionTypes.auth,
    async(values , {rejectWithValue}) => {
        try{
            const response = await APIConfig.post(EndPoints.signUp, values);
            console.log("response", response)
            // if(response.status === 200) {
            //     // const userList = 
            // }
        }
        catch(error) {
            return rejectWithValue("Invalid")
        }
    }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import { ActionTypes, EndPoints } from "../../constants";
import { API_URL } from "../../config";
import { APIConfig } from "../../config/APIConfig";

export const SignUpUser = createAsyncThunk(
    ActionTypes.auth,
    async(values , {rejectWithValue}) => {
        console.log("values", values)
        const response = await APIConfig.post(EndPoints.signUp, values);
        console.log("response", response);
        return 
        // try{
        //     const response = await APIConfig.post(EndPoints.signUp, values);
        //     console.log("response", response);
        //     // return response?.data;
        //     // if(response.status === 200) {
        //     //     // const userList = 
        //     // }
        // }
        // catch (error) {
        //     console.log("|||error|||", error)
        //     return rejectWithValue("Invalid")
        // }
    }
);

export const getSeviceList = createAsyncThunk(
    ActionTypes.services,
    async(values, {rejectWithValue}) => {
        console.log("values---", values)
        try {
            const response = await APIConfig.get(EndPoints.services, values);
            console.log("service response", response);
        }
        catch (error) {
            return rejectWithValue("Invalid")
        }
    }
);

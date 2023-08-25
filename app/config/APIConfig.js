import axios from "axios";

// export const headers = {};

export const APIConfig = axios.create({
    baseURL: 'http://54.201.160.69:9210/api/provider/',
});

import axios from "axios";

export const authApi = axios.create({
    withCredentials:true,
});

export const api = axios.create();
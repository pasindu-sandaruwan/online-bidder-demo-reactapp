import axios from "axios";
import { constants } from "./constants";

export const getApi = () => {
    const baseURL = constants.API_BASE_URL;

    const axiosInstance = axios.create({
        baseURL: baseURL,
        headers: {
            "Content-type": "application/json",
        },
    });

    axiosInstance.interceptors.response.use(
        function (response) { 
            return response;
        },
        function (error) {
            return Promise.reject(error);
        }
    );

    return axiosInstance;
};

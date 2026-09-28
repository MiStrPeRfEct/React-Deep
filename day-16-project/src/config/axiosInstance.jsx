import axios from "axios";

export const AxiosInstance = axios.create({
    baseURL:"https://fakestoreapi.noksha.dev/api",
});

AxiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {}

)
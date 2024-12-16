import axiosClient from "./axiosInstance";

export const authApi = {
    login: async (data) => {
        const response = await axiosClient.post('/auth/login', data);
        return response.data;
    }
}

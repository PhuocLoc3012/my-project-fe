import axiosClient from "./axiosInstance";

 const authApi = {
    login: async (data) => {
        const response = await axiosClient.post('/auth/authenticate', data);
        return response.data;
    }
}

export default authApi

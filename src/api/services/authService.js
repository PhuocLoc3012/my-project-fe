import axiosClient from "api/axiosInstance";


 const authApi = {
    login: async (username, password) => {
        const response = await axiosClient.post('/auth/authenticate', { username, password });
        return response;
    }
}

export default authApi

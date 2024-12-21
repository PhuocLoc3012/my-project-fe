import axiosClient from "api/axiosInstance";


 const userApi = {
    currentUser: async () => {
        const response = await axiosClient.post('/users/current');
        return response;
    }
}

export default userApi

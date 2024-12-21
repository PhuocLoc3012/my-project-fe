import axios from "axios";


const axiosClient =  axios.create({
    baseURL: 'https://localhost:7240/api', 
    headers: {
        'Content-Type': 'application/json'
    },
})

//Interceptors: làm gì đó cho tất cả request, response

// Add a request interceptor
axiosClient.interceptors.request.use(function (config) {
    // Do something before request is sent
    
    //Interceptors requests to add Authorization header
    // const token = store.getState().auth.accessToken;
    // if (token) {
    //     config.headers.Authorization = `Bearer ${token}`;
    // }
    
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
export default axiosClient;
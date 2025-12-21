import { IUser } from '@/types/user-d-t';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import Cookies from 'js-cookie';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 60000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const userData = Cookies.get('userInfo');
    if (userData) {
      const user:{accessToken:string;user:IUser} = JSON.parse(userData);
      config.headers.Authorization = `Bearer ${user.accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error.response.data);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error) => {
    console.log(error,'error');
    // if (error.response && error.response.status === 401) {
    //   console.error('Unauthorized access - please log in');
    // }
    return Promise.reject(error?.response?.data);
  }
);

export default axiosInstance;

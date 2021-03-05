import axios from 'axios';
import { store } from '../store';
const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem("admin-token");
    if (token) {
      config.headers.common["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);


axiosInstance.interceptors.response.use(async response => {
  return response;
},
  async error => {
    return Promise.reject(error);
  })

export default axiosInstance;
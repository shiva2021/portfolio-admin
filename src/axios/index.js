import axios from 'axios';
import store from '../store';
const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    config => {
      const token = localStorage.getItem("barter-token");
      if (token) {
        config.headers.common["Authorization"] =`Bearer ${token}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );


axiosInstance.interceptors.response.use(async response=>{
  return response;
},
async error=>{
  if(error.response.data.code ==='E_JWT_TOKEN_EXPIRED'){
    let payload = {
      token: localStorage.getItem("barter-token"),  
      refToken: localStorage.getItem("barter-refreshToken")
    }
   await store.dispatch("REFRESH_TOKEN", payload);
  }
  return Promise.reject(error);
})

export default axiosInstance;
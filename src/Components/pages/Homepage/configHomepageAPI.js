import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://crudapi.co.uk/api/v1/',
  timeout: 240000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'",
  },
  withCredentials: false,
});
axiosInstance.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = `Bearer cho3MKeflIIp0faY2L7hb_FtKJSEBTQVEYd70a2gKjcWN_A54Q`;
  }

  return config;
});

export default axiosInstance;

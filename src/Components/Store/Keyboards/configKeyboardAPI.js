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
    config.headers.Authorization = `Bearer nxvPr3o3O3ZJLuPeVFdTNAxHnD0tby9iZzsn7ifiv6MwF7cbpQ`;
  }

  return config;
});

export default axiosInstance;

import axios from "axios";

export const axiosInstance = axios.create({
  //create instance
  baseURL: import.meta.env.VITE_APP_BACKEND,
});

//set the Auth token for any request
axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

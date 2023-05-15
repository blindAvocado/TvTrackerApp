import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4444/api",
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("access_token");
  return config;
});

export default instance;

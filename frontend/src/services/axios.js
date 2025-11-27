// api/axiosInstance.js
import axios from "axios";

const baseApiUrl = import.meta.env.VITE_API_URL || "";

const axiosInstance = axios.create({
  baseURL: `${baseApiUrl}`,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  withCredentials: true
});

export default axiosInstance;

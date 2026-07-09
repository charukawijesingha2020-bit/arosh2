import axios from "axios";
import.meta.env.VITE_API_URL;
import.meta.env.VITE_API_KEY;

const API_KEY = import.meta.env.VITE_API_KEY;

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "X-API-KEY": API_KEY,
  },
});

export default API;
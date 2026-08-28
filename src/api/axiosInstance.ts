// src/api/axiosInstance.ts

import axios from "axios";

export const api = axios.create({
  baseURL: "https://your-backend-api.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});


// what is axios? 
// Axios ek JavaScript library hai jo frontend se backend/API ko HTTP requests bhejne aur response lene ke liye use hoti hai.
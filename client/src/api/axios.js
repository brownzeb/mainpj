import axios from "axios";

const BASE_URL = "https://somtooinvestment.vercel.app/";

// const BASE_URL = "http://127.0.0.1:6700";

// man is a rational being

const apiHeader = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

export default axios.create({
  baseURL: BASE_URL,
  apiHeader,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    withCredentials: true,
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
  },
});
// "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",

// "Access-Control-Allow-Origin": "http://127.0.0.1:5000",

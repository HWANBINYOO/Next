import axios from "axios";

const CustomAxois = axios.create({
  baseURL: process.env.URL,
  withCredentials: true,
});

export default CustomAxois;

import axios from "axios";
import { getRefresh } from "./getRefresh";

const CustomAxios = axios.create({
  baseURL: "http://10.82.20.18:8080",
  headers : {
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS,PATCH",
    "Access-Control-Allow-Origin": "*",
    "withCredentials" : true
  }
});

export default CustomAxios

CustomAxios.interceptors.request.use(getRefresh);

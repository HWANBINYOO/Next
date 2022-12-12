import axios from "axios";
import { requestCheck } from "./requestCheck";

const CustomAxios = axios.create({
  baseURL: "http://10.82.17.149:8080/v1",
  headers : {
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS,PATCH",
    "Access-Control-Allow-Origin": "*",
    "withCredentials" : true
  }
});

export default CustomAxios;

CustomAxios.interceptors.request.use(requestCheck);
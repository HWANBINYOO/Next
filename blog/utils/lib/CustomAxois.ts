import axios from "axios";

const CustomAxois = axios.create({
  baseURL: "http://10.82.20.18:8081/",
  headers : {
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS,PATCH",
    "Access-Control-Allow-Origin": "*",
  }
});

export default CustomAxois;

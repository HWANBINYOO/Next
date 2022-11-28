import axios from "axios";

const CustomAxois = axios.create({
  baseURL: "http://10.82.17.149:8080/v1/member",
  headers : {
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS,PATCH",
    "Access-Control-Allow-Origin": "*",
    "withCredentials" : true
  }
});

export default CustomAxois;

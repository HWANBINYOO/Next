import axios from "axios";

const CustomAxois = axios.create({
  baseURL: "http://10.120.74.59:8081/",
});

export default CustomAxois;

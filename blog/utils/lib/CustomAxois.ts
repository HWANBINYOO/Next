import axios from "axios";

const CustomAxois = axios.create({
  baseURL: "https://server.dev-log.kr/",
});

export default CustomAxois;

import axios from "axios";

const CustomAxois = axios.create({
  baseURL: "https://server.dev-log.kr",
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type,Authorization",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
    "Access-Control-Alllow-Credentials": true,
    "Content-Type": "application/json",
    "Cache-Control": "no-store",
  },
});

export default CustomAxois;

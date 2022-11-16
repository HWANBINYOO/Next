import axios from "axios";

const CustomAxois = axios.create({
  baseURL: "https://openapi.naver.com/v1/vision",
  headers: {
    "Content-Type": "multipart/form-data",
    'X-Naver-Client-Id':process.env.NEXT_PUBLIC_ClientId,
    "X-Naver-Client-Secret":process.env.NEXT_PUBLIC_ClientSecret,
  },
});

export default CustomAxois;

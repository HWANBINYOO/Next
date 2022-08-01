import axios from "axios";
import Storage from "../Storage";

const CustomAxois = axios.create({
  baseURL: "https://server.dev-log.kr/",
  headers: {
    Authorization: Storage.get("Blog_accessToken") ?? "",
  },
});

export default CustomAxois;

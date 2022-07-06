import axios from "axios";
import Storage from "../storage";

const CustomAxois = async () => {
  try {
    const header = Object.assign({
      ...{
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type,Authorization",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
        "Access-Control-Alllow-Credentials": true,
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
        Authorization: Storage.get("Blog_accessToken") ?? "",
      },
    });
    return axios({
      baseURL: "https://server.dev-log.kr",
      headers: header,
    });
  } catch (e) {
    throw e;
  }
};

export default CustomAxois;

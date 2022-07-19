import axios from "axios";
import Storage from "../Storage";

// const CustomAxois = () => {
//   try {
//     const header = Object.assign({
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Headers": "Content-Type,Authorization",
//       "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
//       "Access-Control-Alllow-Credentials": true,
//       "Content-Type": "application/json",
//       "Cache-Control": "no-store",
//       // Authorization: window.localStorage.getItem("Blog_accessToken") ?? "",
//     });
//     return axios.create({
//       baseURL: "https://server.dev-log.kr",
//       headers: header,
//     });
//   } catch (e) {
//     console.log(e);
//   }
// };
// export default CustomAxois;

const CustomAxois = axios.create({
  baseURL: "https://server.dev-log.kr/",
  headers: {
    Authorization: Storage.get("Blog_accessToken") ?? "",
  },
});

export default CustomAxois;

// const RequestApi = async (p: AxiosRequestConfig) => {
//   try {
//     const header = Object.assign({
//       ...p.headers,
//       ...{
//         Authorization: Storage.get("accessToken") ?? "",
//       },
//     });
//     return axios({
//       method: p.method,
//       baseURL: "https://server.dev-log.kr/",
//       url: p.url,
//       headers: header,
//     });
//   } catch (e) {
//     throw e;
//   }
// };

// export default RequestApi;

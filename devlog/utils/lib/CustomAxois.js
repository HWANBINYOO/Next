import axios from "axios";
import Storage from "../storage";

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

const customAxios = axios.create({
  baseURL: "https://server.dev-log.kr/",
  headers: {
    Authorization: Storage.getItem("Blog_accessToken") ?? "",
  },
});

export default customAxios;

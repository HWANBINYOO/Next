import axios from "axios";
import Storage from "../Storage";

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

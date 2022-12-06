
import { AxiosRequestConfig } from "axios";
import { UseGeTokenDocument } from "../../Hooks/useToken";
import CustomAxios from "./CustomAxios";

export const getRefresh = async (config: AxiosRequestConfig) => {
if(typeof window !== 'object') return config;
let  { Authorization , RefreshToken } = UseGeTokenDocument()
console.log(Authorization);

if (config.headers && Authorization) {
    config.headers["Authorization"] = Authorization;
}
if(!Authorization){
    try{
      const {data} = await CustomAxios.patch("/auth/reissue",{},{headers: {RefreshToken}});
      console.log(data);
      Authorization = data.accessToken;
      RefreshToken = data.refreshToken;
      // UseSetToken(Authorization,RefreshToken)
    } catch(e){
      console.log(e);
    }
  }  
  
  return config;
};
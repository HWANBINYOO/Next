
import { AxiosRequestConfig } from "axios";
import { UseGeTokenDocument, UseSetToken } from "../../Hooks/useToken";
import CustomAxios from "./CustomAxios";

export const getRefresh = async (config: AxiosRequestConfig) => {
if(typeof window !== 'object') return config;
const { Authorization , RefreshToken } =  UseGeTokenDocument()
console.log(Authorization);
console.log(config.url);

if (config.headers && Authorization) {
    config.headers["Authorization"] = Authorization;
}

if(!Authorization && config.url !== "auth/signup" && config.url !== "auth/signin"){
    try{
      const {data} = await CustomAxios.patch("/auth/reissue",{},{headers: {RefreshToken}});
      UseSetToken(data.accessToken,data.refreshToken)
    } catch(e){
      console.log(e);
    }
  }
  
  return config;
};
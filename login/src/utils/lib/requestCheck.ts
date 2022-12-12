import axios, { AxiosRequestConfig } from "axios";
import { UseGeTokenDoc, UseSetToken } from "../../Hooks/useToken";
// import { BASEURL } from "./BaseUrl";

export const requestCheck = async (config: AxiosRequestConfig) => {
  if(typeof window !== 'object') return config;
  const { Authorization , RefreshToken } =  UseGeTokenDoc()
  
  if (config.headers && Authorization){
    config.headers["Authorization"] = Authorization
  }
  else if (!Authorization && config.url !== "auth/signup" && config.url !== "auth/signin"){
    try{
        const {data} = await axios.patch(`http://10.82.17.149:8080/v1/auth/reissue`,{},{headers: {RefreshToken}});
        if (config.headers) config.headers["Authorization"] = data.accessToken
        UseSetToken(data.accessToken,data.refreshToken,null)
    } catch(e){ 
        console.log(e);
    }
  }

  return config;
};
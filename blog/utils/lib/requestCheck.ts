import axios, { AxiosRequestConfig } from "axios";
import { UseGeTokenDocument, UseSetToken } from "../../Hooks/useToken";
import { BASEURL } from "./BaseUrl";

export const requestCheck = async (config: AxiosRequestConfig) => {
  if(typeof window !== 'object') return config;
  const { Authorization , RefreshToken } =  UseGeTokenDocument()
  console.log(RefreshToken);

if (config.headers && Authorization){
  config.headers["Authorization"] = Authorization
}
else if (!Authorization && config.url !== "auth/signup" && config.url !== "auth/signin"){
    try{
      const {data} = await axios.patch(`${BASEURL}/auth/reissue`,{},{headers: {RefreshToken}});
      console.log(data);
      if (config.headers) config.headers["Authorization"] = data.accessToken
      UseSetToken(data.accessToken,data.refreshToken)
    } catch(e){ 
      console.log(e);
    }
  }

  return config;
};
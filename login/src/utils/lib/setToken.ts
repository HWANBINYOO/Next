import CustomAxois from "./CustomAxois";

const setToken = (accessToken:string, refreshToken:string) => {
    CustomAxois.defaults.headers.common["Authorization"] = accessToken;
    const AccessToKenTime = 60000 * 3;  //3분
    const RefreshTokenTime = 60000 * 60 * 24 * 7; //일주일
    document.cookie = `Authorization=${accessToken}; path=/; expires=${AccessToKenTime}`
    document.cookie = `RefreshToken=${refreshToken}; path=/; expires=${RefreshTokenTime}`
}

export default setToken
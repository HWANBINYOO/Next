import CustomAxois from "./CustomAxois";

const setToken = (accessToken:string, refreshToken:string) => {
    let AccessToKenTime = new Date(Date.now() +  60000 * 3);
    let RefreshTokenTime = new Date(Date.now() +  60000 * 60 * 24 * 7);
    // const AccessToKenTime = 60000 * 3; // 3분
    // const RefreshTokenTime = 60000 * 60 * 24 * 7; // 일주일
    document.cookie = `Authorization=${accessToken}; path=/; expires=${AccessToKenTime}`
    document.cookie = `RefreshToken=${refreshToken}; path=/; expires=${RefreshTokenTime}`
    CustomAxois.defaults.headers.common["Authorization"] = accessToken;
}

export default setToken
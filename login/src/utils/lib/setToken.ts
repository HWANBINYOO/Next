const setToken = (accessToken:string, refreshToken:string) => {
    let AccessToKenTime = new Date(Date.now() +  60000 * 3); // 3분
    let RefreshTokenTime = new Date(Date.now() +  60000 * 60 * 24 * 7); // 일주일
    document.cookie = `Authorization=${accessToken}; path=/; expires=${AccessToKenTime}`
    document.cookie = `RefreshToken=${refreshToken}; path=/; expires=${RefreshTokenTime}`
}

export default setToken
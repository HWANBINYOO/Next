const isLogin = (accessToken:string, refreshToken:string) => {
    document.cookie = `Authorization=${accessToken}; path=/; expires=${new Date(Date.now() +  60000 * 3)}` // 3분
    document.cookie = `RefreshToken=${refreshToken}; path=/; expires=${new Date(Date.now() +  60000 * 60 * 24 * 7)}` // 일주일
}

export default isLogin
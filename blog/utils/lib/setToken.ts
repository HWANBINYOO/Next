import CustomAxois from "./CustomAxois";
import cookie from 'react-cookies'




const setToken = (accessToken:string, refreshToken:string) => {
    CustomAxois.defaults.headers.common["Blog_accessToken"] = accessToken;
    // CustomAxois.defaults.headers.common["Blog_refreshToken"] = refreshToken;

    const expires = new Date()
    const expiresAcess = new Date()
    const expiresRef = new Date()
    expiresAcess.setDate(Date.now() + 60000 * 3)  // 3분
    expiresRef.setDate(Date.now() +  60000 * 60 * 24 * 7) // 일주일
    expires.setDate(Date.now() + 1000 * 60 * 60 * 24) // 1일


    cookie.save(
        'Blog_accessToken',
        accessToken,
        {
            path: '/',
            expires : expires,
            // httpOnly: true
        }
      )
      cookie.save(
        'Blog_refreshToken',
        refreshToken,
        {
            path: '/',
            expires : expires,
            // httpOnly: true
        }
      )

}

export default { setToken }
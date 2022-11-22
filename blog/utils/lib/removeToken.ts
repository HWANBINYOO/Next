import CustomAxois from "./CustomAxois";
import cookie from 'react-cookies'

const removeToken = () => {
    cookie.remove('Authorization')
    cookie.remove('RefreshToken')
}

export default removeToken 
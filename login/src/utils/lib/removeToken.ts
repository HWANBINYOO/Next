const removeToken = () => {
    document.cookie = `Authorization=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
    document.cookie = `RefreshToken=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
}

export default removeToken;
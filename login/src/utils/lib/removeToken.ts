const removeToken = () => {
    document.cookie = `foo=Authorization; path=/; expires=-1`;
    document.cookie = `foo=RefreshToken; path=/; expires=-1`;
}

export default removeToken 
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

export const setAccessToken = (token) => {
  const {access} = token;
  Cookies.set('access_token', access, { expires: 7, secure: true });
};

export const setRefreshToken = (token) => {
    const {refresh} = token;
    Cookies.set('refresh_token', refresh, { expires: 7, secure: true })
}

export const getAccessToken = () => {
  return Cookies.get('access_token');
};

export const getRefreshToken = () => {
    return Cookies.get('refresh_token');
}

export const removeAccessToken = () => {
  Cookies.remove('access_token');
};

export const removeRefreshToken = () => {
    Cookies.remove('refresh_token');
};

export const isAccessTokenExpired = (accessToken) => {
    try {
        const decoded = jwtDecode(accessToken);
        return decoded.exp < Math.floor(Date.now() / 1000); // Check expiration time
    } catch (error) {
        console.error('Error decoding access token:', error);
        return true; // Treat as expired if decoding fails
    }
}
  


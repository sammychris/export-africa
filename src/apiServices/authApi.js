import axios from 'axios';
import { setAccessToken, getRefreshToken, setRefreshToken } from '@/utils/cookieUtils';
const apiUrl = 'http://localhost:3000/api/auth/';

export const login = async (credentials) => {
    try {
        const { data } = await axios.post(`${apiUrl}login/`, credentials);
        return data;
        // setAccessToken(data?.token);
        // setRefreshToken(response.data);
        // return response.data;
    } catch (error) {
        console.error('Error fetching all data:', error);
        throw error; // Rethrow the error for the calling component to handle
    }
};

export const register = async (credentials) => {
    try {
        const { data } = await axios.post(`${apiUrl}register/`, credentials);
        console.log({data})
        return data;
    } catch (error) {
        console.error('Error fetching all data:', error);
        throw error; // Rethrow the error for the calling component to handle
    }
};

export const refreshToken = async () => {
    try {
        const refresh = getRefreshToken(); // Retrieve from secure storage
        const response = await axios.post(`${apiUrl}refresh/`, { refresh });
        setAccessToken(response.data);
    } catch (error) {
          // Handle refresh token failure
    }
}



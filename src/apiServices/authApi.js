import axios from 'axios';
import { setAccessToken, getRefreshToken, setRefreshToken } from '@/utils/cookieUtils';
const apiUrl = 'https://task-api.learninbit.app/api/v1/auth/token/';

export const login = async (credentials) => {
    try {
        const response = await axios.post(apiUrl, credentials);
        setAccessToken(response.data);
        setRefreshToken(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching all data:', error);
        throw error; // Rethrow the error for the calling component to handle
    }
};

export const refreshToken = async () => {
    try {
        const refresh = getRefreshToken(); // Retrieve from secure storage
        console.log({refresh})
        const response = await axios.post(`${apiUrl}refresh/`, { refresh });
        setAccessToken(response.data);
    } catch (error) {
          // Handle refresh token failure
    }
}



import axios from 'axios';
import { getAccessToken, isAccessTokenExpired } from '@/utils/cookieUtils';
import { refreshToken } from '@/apiServices/authApi';


const makeRequest = async (method, url, data = null) => {
    if (isAccessTokenExpired(getAccessToken())) {
        try {
            await refreshToken(); // Call the refresh token function
        } catch (error) {
            throw new Error('Authentication required'); // Signal authentication failure
        }
    }
    try {
        const response = await axios({
            method,
            url,
            data,
            headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getAccessToken()}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error making request:', error);
        throw error; // Rethrow for appropriate handling
    }
};

export default makeRequest;

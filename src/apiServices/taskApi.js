import axios from 'axios';
import { getAccessToken, isAccessTokenExpired } from '@/utils/cookieUtils';
import { refreshToken } from '@/apiServices/authApi';

const apiUrl =  'https://task-api.learninbit.app/api/v1/tasks/task/';


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


export const createTask = async (data) => {
    try {
        const { title, description, categoryId, priority } = data;
        const responseData = await makeRequest('post', apiUrl, {
            label: title,
            description,
            meta: { categoryId, priority },
        });
        console.log({ response: responseData }); // Log the response data
        return responseData;
    } catch (error) {
        console.error('Error creating Task:', error);
        throw error; // Rethrow for error handling in calling component
    }
};
  

export const getTasks = async () => {
    try {
        const tasks = await makeRequest('get', apiUrl);
        return tasks;
    } catch (error) {
        console.error('Error fetching Tasks:', error);
        throw error; // Rethrow for error handling in calling component
    }
};


export const getTaskById = async (id) => {
    // Implementation for reading Tasks
};

export const updateTask = async (id, updatedData) => {
    try {
        const { title, description, categoryId, priority } = updatedData;
        const responseData = await makeRequest('put', `${apiUrl}${id}/`, {
            label: title,
            description,
            meta: { categoryId, priority },
        });
        return responseData;
    } catch (error) {
        console.error('Error updating Task:', error);
        throw error; // Rethrow for error handling in calling component
    }
};
  
export const deleteTask = async (id) => {
    try {
        const responseData = await makeRequest('delete', `${apiUrl}${id}/`);
        console.log('Delete Task Response:', responseData);
        return responseData;
    } catch (error) {
        console.error('Error deleting Task:', error);
        throw error; // Rethrow for error handling in calling component
    }
};
  
  
import makeRequest from "./makeRequest";

const apiUrl =  'https://task-api.learninbit.app/api/v1/tasks/task/';


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
  
  
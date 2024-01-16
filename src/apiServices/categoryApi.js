import makeRequest from "./makeRequest";

const apiUrl =  'https://task-api.learninbit.app/api/v1/tasks/categories/';

export const createCategory = async (data) => {
    try {
        const { title, description, icon, color } = data;
        const responseData = await makeRequest('post', apiUrl, {
            label: title,
            description,
            meta: { icon, color },
        });
        return responseData;
    } catch (error) {
        console.error('Error creating category:', error);
        throw error; // Rethrow for error handling in calling component
    }
};
  

export const getCategories = async () => {
    try {
        const categories = await makeRequest('get', apiUrl);
        return categories;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error; // Rethrow for error handling in calling component
    }
};


export const getCategoryById = async (id) => {
    try {
        const responseData = await makeRequest('get', `${apiUrl}${id}/`);
        return responseData;
    } catch (error) {
        console.error('Error deleting category:', error);
        throw error; // Rethrow for error handling in calling component
    }
};

export const updateCategory = async (id, updatedData) => {
    try {
        const { title, description, icon, color } = updatedData;
        const responseData = await makeRequest('put', `${apiUrl}${id}/`, {
            label: title,
            description,
            meta: { icon, color },
        });
        return responseData;
    } catch (error) {
        console.error('Error updating category:', error);
        throw error; // Rethrow for error handling in calling component
    }
};
  
export const deleteCategory = async (id) => {
    try {
        const responseData = await makeRequest('delete', `${apiUrl}${id}/`);
        return responseData;
    } catch (error) {
        console.error('Error deleting category:', error);
        throw error; // Rethrow for error handling in calling component
    }
};
  
  
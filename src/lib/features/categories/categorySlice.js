import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        byId: {},
        allIds: [],
    },
    reducers: {
        addCategory(state, action) {
            const newCategory = action.payload;
            state.byId[newCategory.id] = newCategory;
            state.allIds.push(newCategory.id);
        },
        updateCategory(state, action) {
            const { categoryId, updates } = action.payload;
            const existingCategory = state.byId[categoryId];
            state.byId[categoryId] = { ...existingCategory, ...updates }; // Update the category
        },
        deleteCategory(state, action) {
            const categoryId = action.payload;
            delete state.byId[categoryId];
            state.allIds = state.allIds.filter((id) => id !== categoryId);
        },
        fetchCategoriesSuccess(state, action) {
            const categories = action.payload;
            state.byId = {};
            state.allIds = [];
            categories.forEach((category) => {
                state.byId[category.id] = category;
                state.allIds.push(category.id);
            });
        },
    },
});

export const { addCategory, updateCategory, deleteCategory, fetchCategoriesSuccess } = categoriesSlice.actions;
export default categoriesSlice.reducer;

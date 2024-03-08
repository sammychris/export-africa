import Category from '@/lib/models/category';

export async function createCategory(exporterData) {
    try {
        const category = new Category(exporterData);
        const saveCategory = await category.save();

        return saveCategory;
    } catch (error) {
        console.log({error})
        throw new Error('Failed to create category');
    }
}

export async function findOneCategory(query) {
    try {
        const category = await Category.findOne(query);
        return category;
    } catch (error) {
        console.log({error})
        throw new Error('Failed to retrieve category');
    }
}


export async function getCategoryById(catId) {
    try {
        const category = await Category.findById(catId);

        if (!category) {
        throw new Error('Category not found');
        }

        return category;
    } catch (error) {
        throw new Error('Failed to retrieve category');
    }
}


export async function updateCategory(catId, updatedData) {
    try {
        const category = await Category.findByIdAndUpdate(catId, updatedData, { new: true });
        if (!category) {
            throw new Error('Category not found');
        }

        return category;
    } catch (error) {
        console.log({error});
        throw new Error('Failed to update category');
    }
}
  

export async function deleteCategory(catId) {
    try {
        const result = await Category.findByIdAndDelete(catId);

        if (!result) {
            throw new Error('Category not found');
        }

        return result;
    } catch (error) {
        throw new Error('Failed to delete category');
    }
}


export function getCategories(filter = {}) {
    try {
        return Category.find(filter);
    } catch (error) {
        throw new Error('Failed to retrieve categories');
    }
}


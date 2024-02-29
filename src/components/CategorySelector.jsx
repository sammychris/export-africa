import React from 'react';

const CategorySelector = ({ 
    catData, 
    selectedCategory,
    handleCategoryChange, 
    handleSubcategoryChange,
    subCategories,
    formik,
}) => {
    // const subCategories = catData.find(cat => cat.name === selectedCategory)?.subcategories || [];

    return (
        <>
            <label htmlFor="category" className="text-sm font-semibold">
                Category:
            </label>
            <select
                id="category"
                className="border rounded p-2 w-40"
                {...formik.getFieldProps('category')}
                onChange={(e) => handleCategoryChange(e.target.value)}
            >
                {
                    catData.map((category, i) => {
                        return <option key={i} value={category.name}>{category.name}</option>
                    })
                }
            </select>
            {formik.touched.category && formik.errors.category && (
                <div className="text-red-500 text-xs mt-1">{formik.errors.category}</div>
            )}
            {subCategories?.length > 0 && (
                <div>
                    <label htmlFor="subcategory" className="text-sm font-semibold">
                        Subcategory:
                    </label>
                    <select
                        id="subcategory"
                        className="border rounded p-2 w-40"
                        {...formik.getFieldProps('subcategory')}
                        onChange={(e) => handleSubcategoryChange(e.target.value)}
                    >
                        <option value="">Select subcategory</option>
                        {subCategories?.map((sub) => (
                            <option key={sub.name} value={sub.name}>
                                {sub.name}
                            </option>
                        ))}
                    </select>
                    {formik.touched.subcategory && formik.errors.subcategory && (
                        <div className="text-red-500 text-xs mt-1">{formik.errors.subcategory}</div>
                    )}
                    </div>
                )}
        </>
    );
};

export default CategorySelector;

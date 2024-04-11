import React from 'react';

const ProductCategorySelector = ({ setSelectedCategory, formik, categories, selectedCategory }) => {
    return (
        <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
                <label htmlFor="category" className="text-sm font-semibold">
                    Category:
                </label>
                <select
                    value={selectedCategory}
                    id="category"
                    className="border rounded p-2 w-40"
                    onChange={(e) => {
                        const category = e.target.value;
                        categories[category]?.children?.length
                        ? formik.setFieldValue('category', '')
                        : formik.setFieldValue('category', category);

                        setSelectedCategory(category);
                    }}
                >
                    <option value="">(Select a Category)</option>
                    {Object.values(categories).map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
                {selectedCategory && !!categories[selectedCategory]?.children?.length && (
                    <div>
                        <select
                            id="subcategory"
                            className="border rounded p-2 w-40"
                            onChange={(e) => formik.setFieldValue('category', e.target.value)}
                        >
                            <option value="">(Select a Subcategory)</option>
                            {categories[selectedCategory].children.map((child) => (
                                <option key={child.id} value={child.id}>
                                    {child.name}
                                </option>
                            ))}
                        </select>
                        {formik.touched.subcategory && formik.errors.subcategory && (
                            <div className="text-red-500 text-xs mt-1">{formik.errors.subcategory}</div>
                        )}
                        </div>
                )}
            </div>
            {formik.touched.category && formik.errors.category && (
                <div className="text-red-500 text-xs mt-1">{formik.errors.category}</div>
            )}
        </div>
    );
};

export default ProductCategorySelector;


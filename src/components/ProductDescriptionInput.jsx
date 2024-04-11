import React from 'react';

const ProductDescriptionInput = ({ formik }) => {
    return (
        <div className="flex flex-col space-y-2">
            <label htmlFor="description" className="text-sm font-semibold">
                    Description:
                </label>
                <textarea
                    id="description"
                    className="border rounded p-2 h-24"
                    {...formik.getFieldProps('description')}
                />
                {formik.touched.description && formik.errors.description && (
                    <div className="text-red-500 text-xs mt-1">{formik.errors.description}</div>
                )}
        </div>
    );
};

export default ProductDescriptionInput;




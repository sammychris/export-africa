import React from 'react';

const ProductNameInput = ({ formik }) => {
    return (
        <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-sm font-semibold">
                Name:
            </label>
            <input
                type="text"
                id="name"
                className="border rounded p-2"
                {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name && (
                <div className="text-red-500 text-xs mt-1">{formik.errors.name}</div>
            )}
        </div>
    );
};

export default ProductNameInput;

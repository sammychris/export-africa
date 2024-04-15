import React from 'react';

const PriceAndCurrencyInput = ({ formik }) => {
    return (
        <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
                <label htmlFor="price" className="text-sm font-semibold">
                    Price:
                </label>
                <input
                    type="number"
                    id="price"
                    className="border rounded p-2 w-24"
                    {...formik.getFieldProps('price')}
                />
                <select
                    id="currency"
                    className="border rounded p-2 w-24"
                    {...formik.getFieldProps('currency')}
                >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                </select>
            </div>
            {formik.touched.price && formik.errors.price && (
                <div className="text-red-500 text-xs mt-1">{formik.errors.price}</div>
            )}
        </div>
    );
};

export default PriceAndCurrencyInput;

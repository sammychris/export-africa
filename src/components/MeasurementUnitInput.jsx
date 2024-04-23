import React from 'react';

const MeasurementUnitInput = ({ formik, selectedCategory, categories }) => {
    if (!selectedCategory) return;
    return (
        <div className="flex flex-col space-y-2">
            <label htmlFor="unit">Select Measurement unit:</label>
            <select
                id="unit"
                className="border rounded p-2"
                value={formik.values.measurementUnit}
                onChange={(e) => formik.setFieldValue('measurementUnit', e.target.value)}
            >
                <option value="">Select unit (based on category/subcategory)</option>
                {categories[selectedCategory]?.measurementUnits?.map((unit) => (
                    <option key={unit.value} value={unit.value}>{unit.label}: {unit.value}</option>
                ))}
            </select>
             {formik.touched.measurementUnit && formik.errors.measurementUnit && (
                <div className="text-red-500 text-xs mt-1">{formik.errors.measurementUnit}</div>
            )}
        </div>
    );
};

export default MeasurementUnitInput;

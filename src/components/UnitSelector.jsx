import React from 'react';

const UnitSelector = ({ units, formik }) => {
  return (
    <div>
      <label htmlFor="unit">Select unit:</label>
      <select
          id="unit"
          className="border rounded p-2 w-48"
          disabled={!units.length}
          onChange={(e) => formik.setFieldValue('unit', e.target.value)}
      >
          <option value="">Select unit (based on category and subcategory)</option>
          {units.map((unit) => (
          <option key={unit} value={unit}>
              {unit}
          </option>
          ))}
      </select>
      {units.length > 0 && (
          <div className="text-sm text-gray-500">Default unit: {units[0]}</div>
      )}
  </div>

  );
};

export default UnitSelector;

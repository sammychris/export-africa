import React from 'react';
import { Field, ErrorMessage } from 'formik';

const SocialLinkField = ({ onRemove, onChange, link, index, name }) => {
  return(
    <>
      <div className="flex items-center mb-3" key={index}>
        <div className='w-1/3 relative mr-2'>
          <Field
            type="text"
            placeholder="FaceBook"
            name={`${name}.platform`} // Construct the nested field name
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-blue-500"
            onChange={onChange}
          />
          <ErrorMessage name={`${name}.platform`} component="div" className="text-red-500 absolute bottom-[-10px] left-0 text-sm" />
        </div>
        <div className="flex-1 mr-2">
          <Field
            type="url"
            placeholder="https://facebook.com/username"
            name={`${name}.url`}  // Construct the nested field name
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-blue-500"
            onChange={onChange}
          />
          <ErrorMessage name={`${name}.url`} component="div" className="text-red-500 absolute bottom-[-10px] left-0 text-sm" />
        </div>
        <button
          type="button"
          onClick={() => onRemove(index)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
        >
          Remove
        </button>
      </div>
      

  </>
)};

export default SocialLinkField;

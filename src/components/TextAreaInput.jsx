import React from 'react';

const TextAreaInput = ({
  label,
  id,
  name,
  placeholder,
  onChange,
  onBlur,
  value,
  error,
  touched,
}) => {
  return (
    <div className="mb-[50px]">
      <div>
        <label className="text-[#757575] text-sm">{label}</label> <span className="text-[red] text-[20px]">*</span>
      </div>
      <textarea
        className="w-full max-w-[861px] h-[104px] bg-[#F2F2F2] rounded-[3px] mt-[5px] px-4 py-2"
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {touched && error && (
        <div className="text-[#DF5146] text-sm font-normal relative">
          {error}
        </div>
      )}
    </div>
  );
};

export default TextAreaInput;

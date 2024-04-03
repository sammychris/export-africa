const InputField = ({
    label,
    id,
    name,
    placeholder,
    onChange,
    onBlur,
    value,
    error,
    touched,
    styleClass = "w-[48%] max-w-[420px] relative",
    isRequired = false,
    inputType = 'text',
  }) => {
    return (
      <div className={styleClass}>
        <div >
          <label className={`text-[#757575] text-sm ${isRequired ? 'required-label' : ''}`}>{label}</label>
          {isRequired && <span className="text-[red] text-[20px] ml-1 absolute">*</span>}
        </div>
        <input
          className="w-full h-10 bg-[#F2F2F2] rounded-[3px] mt-[10px] mb-[40px] px-4"
          type={inputType}
          id={id}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          required={isRequired}
        />
        {touched && error && <div className="text-[#DF5146] text-sm font-normal absolute top-[76px]">{error}</div>}
      </div>
    );
  };


  export default InputField
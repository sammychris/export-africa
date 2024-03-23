

const FileInputField = ({
    label,
    id,
    name,
    placeholder,
    onChange,
    onBlur,
    error,
    touched,
    styleClass = "w-[48%] max-w-[420px] relative",
    isRequired = false,
}) => {
    return (
        <div className={styleClass}>
            <div >
                <label className={`text-[#757575] text-sm ${isRequired ? 'required-label' : ''}`}>{label}</label>
                {isRequired && <span className="text-[red] text-[20px] ml-1 absolute">*</span>}
            </div>
            <input
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                id={id}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
            />
            {touched && error && <div className="text-[#DF5146] text-sm font-normal absolute top-[76px]">{error}</div>}
        </div>
        
    );
}

export default FileInputField;

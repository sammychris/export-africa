

const CertificationCheckbox = ({ id, name, label, isChecked, handleChange, handleBlur }) => (
    <div className="flex items-center mb-2">
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={isChecked}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <label htmlFor={id} className="ml-2">{label}</label>
    </div>
  );

  export default CertificationCheckbox;
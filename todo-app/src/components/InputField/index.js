const InputField = ({ value, setValue, name, fieldId, label, type }) => {
  return (
    <div className="mb-3 row">
      <label htmlFor={fieldId} className="form-label">
        {label}
      </label>
      <input
        name={name}
        type={type}
        className="form-control"
        id={fieldId}
        aria-describedby="emailHelp"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div id="emailHelp" className="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
  );
};

export default InputField;

function InputField({ label, type, name, value, onChange }) {
    return (
      <div className="input-container">
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="input-field"
        />
      </div>
    );
  }
  
  export default InputField;
  
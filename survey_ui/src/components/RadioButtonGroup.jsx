function RadioButtonGroup({ question, options, name, selectedValue, onChange }) {
    return (
      <div className="radio-group">
        <label>{question}</label>
        {options.map((option, index) => (
          <div key={index} className="radio-option">
            <input
              type="radio"
              name={name}
              value={option}
              checked={selectedValue === option}
              onChange={onChange}
            />
            <label>{option}</label>
          </div>
        ))}
      </div>
    );
  }
  
  export default RadioButtonGroup;
  
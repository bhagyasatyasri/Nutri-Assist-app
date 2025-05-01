import React from 'react';

const InputField = ({ label, type, value, onChange, name, className }) => (
  <div className="input-group">
    <label><strong>{label}</strong></label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      required
      className={className}
    />
  </div>
);

export default InputField;

import React from 'react';

const Button = ({ text, type, className }) => (
  <button type={type} className={className}>
    {text}
  </button>
);

export default Button;

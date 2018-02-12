import React from 'react';
export const required = value => value ? undefined : 'Required';

export const renderField = ({
  input,
  label,
  type,
  placeholder,
  meta: {touched, error, warning }
}) => (
  <div>
    <div>
      <label>{label}</label>
      <input {...input} type={type} placeholder={placeholder}/>
      {touched &&
        ((error && <span className="formError">{error}</span>))}
    </div>
  </div>
)
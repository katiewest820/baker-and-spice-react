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
      <label>{label}</label>
      <input {...input} type={type} placeholder={placeholder} autoComplete="off"/>
      {touched &&
        ((error && <span className="formError">{error}</span>))}
    </div> 
  )

export const renderTextAreaField = ({
  input,
  label,
  type,
  placeholder,
  meta: {touched, error, warning }
}) => (
  
    <div>
      <label>{label}</label>
      <textarea {...input} type={type} placeholder={placeholder} autoComplete="off"/>
      {touched &&
        ((error && <span className="formError">{error}</span>))}
    </div> 
  )
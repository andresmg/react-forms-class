import React from "react";

export default function TextareaWithLabel({ name, value, onChange }) {
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <textarea name={name} value={value} onChange={onChange} />
    </div>
  );
}

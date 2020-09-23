import React from "react";

export default function InputWithLabel({ name, value, onChange }) {
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input name={name} type="text" value={value} onChange={onChange} />
    </div>
  );
}

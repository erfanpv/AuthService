import React from "react";

const FormInput = ({ label, type, name, value, onChange, placeholder }) => (
  <div>
    <label className="block text-gray-600">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
      placeholder={placeholder}
      required
    />
  </div>
);

export default FormInput;

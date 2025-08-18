import React from "react";

const FormField = ({ label, type, name, placeholder, value, onChange }) => (
  <div>
    <label className="block text-white/80 mb-2">{label}</label>
    <input
      type={type}
      name={name}
      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default FormField;

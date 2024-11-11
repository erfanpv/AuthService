import React from "react";

const Button = ({ text }) => (
  <button
    type="submit"
    className="w-full py-2 font-bold text-white bg-black rounded-md"
  >
    {text}
  </button>
);

export default Button;

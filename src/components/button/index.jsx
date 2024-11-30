import React from "react";
const Button = ({ type = "submit", onClick, title, color, ...props}) => {
  return (
    <button
      type={type}
      onClick={onClick && onClick}
      className={`${color} p-2 rounded-[6px] text-white hover:bg-blue-700 transition`}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;

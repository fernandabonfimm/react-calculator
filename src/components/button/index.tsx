import React from "react";
import { ButtonProps } from "../../interfaces/buttonProps";

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center bg-white border-2 text-gray-500 text-sm ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
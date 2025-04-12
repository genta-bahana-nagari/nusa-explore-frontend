import React from "react";

export function Button({ children, className = "", variant = "solid", ...props }) {
  const baseStyle = "px-4 py-2 rounded font-medium";
  const variants = {
    solid: "bg-blue-600 text-white hover:bg-blue-700",
    link: "text-blue-600 hover:underline bg-transparent p-0",
  };
  
  return (
    <button
      className={`${baseStyle} ${variants[variant] || variants.solid} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

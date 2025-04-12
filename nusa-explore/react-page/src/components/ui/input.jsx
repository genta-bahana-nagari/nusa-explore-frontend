import React from "react";

export function Input({ className = "", ...props }) {
  return (
    <input
      className={`border rounded px-3 py-2 w-full outline-none focus:ring focus:ring-blue-300 ${className}`}
      {...props}
    />
  );
}

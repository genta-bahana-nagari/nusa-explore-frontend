import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-lg shadow p-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`${className}`}>{children}</div>;
}

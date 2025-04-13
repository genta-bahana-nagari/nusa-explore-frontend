import React from "react";
import { Navigate } from "react-router-dom";

const RoleChecker = ({ element, allowedRoles }) => {
  const token = localStorage.getItem("token");
  const roles = JSON.parse(localStorage.getItem("roles"));

  if (!token) return <Navigate to="/login" />;

  const hasAccess = roles?.some(role => allowedRoles.includes(role));

  if (!hasAccess) {
    return <Navigate to="/unauthorized" />;
  }

  return element;
};

export default RoleChecker;
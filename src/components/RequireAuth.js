import React from "react";
import { Navigate } from "react-router-dom";

export default function RequireAuth({ isLogged, children }) {
  if (!isLogged) {
    return <Navigate to="/register"></Navigate>;
  }
  return <>{children}</>;
}

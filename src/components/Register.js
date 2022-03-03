import React from "react";
import { Navigate } from "react-router-dom";

export default function Register({ isLogged }) {
  if (isLogged === true) {
    return <Navigate to="/user-detail"></Navigate>;
  }

  return <div>Register Component</div>;
}

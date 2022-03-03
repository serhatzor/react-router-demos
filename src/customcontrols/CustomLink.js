import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function CustomLink({ children, to, state }) {
  const location = useLocation();
  const match = location.pathname === to;
  return (
    <span>
      {match ? "👉" : ""}
      <Link to={to} state={state}>
        {children}
      </Link>
    </span>
  );
}

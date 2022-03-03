import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </button>
      <button
        onClick={() => {
          navigate("/products");
        }}
      >
        Go Products
      </button>
      <button
        onClick={() => {
          navigate(1);
        }}
      >
        Go Forward
      </button>
    </div>
  );
}

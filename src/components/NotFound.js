import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound({ section }) {
  const navigate = useNavigate();
  return (
    <div>
      There is no route under {section}{" "}
      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
}

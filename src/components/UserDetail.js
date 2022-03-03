import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UserDetail({ isLogged, userName }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogged === false) {
      navigate("/register");
    }
  });

  return (
    <div>
      {userName} is {isLogged ? "logged" : "not logged"}
    </div>
  );
}

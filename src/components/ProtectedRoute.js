import { UserAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import React from "react";

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default ProtectedRoute;

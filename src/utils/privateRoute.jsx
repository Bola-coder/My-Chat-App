import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

const PrivateRoutes = ({ children }) => {
  const { user } = useAuthContext();
  return user ? children : <Navigate to="/auth" />;
};

export default PrivateRoutes;

// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import {useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  // ✅ Redirect unauthenticated users to the login page
const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // ✅ If logged in, show the protected content
  return children;
};

export default ProtectedRoute;

import React from "react";
import { useAuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, requireAdmin }) {
  const { user, isLoading } = useAuthContext();
  if (isLoading) {
    return <div>Loding...</div>;
  }
  if (!user || (requireAdmin && !user?.isAdmin)) {
    return <Navigate to={"/"} replace />;
  }
  return children;
}

// src/hooks/useAuth.js
import { useState } from "react";

// 🧠 Simple mock authentication hook
export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return { isAuthenticated, login, logout };
};

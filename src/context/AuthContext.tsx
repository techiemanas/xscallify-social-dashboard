// context/AuthContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";
import { LoginResponse } from "../types";

interface AuthContextType {
  token: string | null;
  user: LoginResponse | null;
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem("token")
  );

  const [user, setUser] = useState<LoginResponse | null>();

  const login = (authData: LoginResponse) => {
    localStorage.setItem("token", authData.access_token);
    setUser(authData);
    setToken(authData.access_token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const isAuthenticated = !!token;

  const value = { token, isAuthenticated, login, logout, user };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

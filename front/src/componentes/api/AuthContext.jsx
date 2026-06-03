import React, { createContext, useContext, useState, useEffect } from 'react';
import api from './api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // La fuente de verdad es la sesión del backend (cookie), no localStorage
  // (que el usuario podría falsificar). Se verifica al montar.
  useEffect(() => {
    api.get('/users/protegida')
      .then(() => setIsAuthenticated(true))
      .catch(() => setIsAuthenticated(false))
      .finally(() => setLoading(false));
  }, []);

  const login = () => setIsAuthenticated(true);

  const logout = async () => {
    try {
      await api.get('/users/logout');
    } catch {
      // aunque falle el server, limpiamos el estado local
    }
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

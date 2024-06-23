// src/contexts/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import API from '../utils/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setUser(jwtDecode(token));
    }
  }, []);

  const login = async (credentials) => {
    try {
      const response = await API.post('/auth/login', credentials);
      localStorage.setItem('authToken', response.data.token);
      setUser(jwtDecode(response.data.token));
    } catch (error) {
      console.error('Login error:', error);
      throw error; // Handle error appropriately in your UI
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

// src/App.js
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import MessageList from './components/Messages/Messagelist';
import PrivateRoute from './components/PrivateRoute';

const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <PrivateRoute path="/messages" element={<MessageList />} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;

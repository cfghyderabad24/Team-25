// src/components/Auth/Signup.js
import React, { useState } from 'react';
import API from '../../utils/api';
import { useHistory } from 'react-router-dom';

const Signup = () => {
  const [user, setUser] = useState({
    phoneNo: '',
    password: '',
    firstName: '',
    lastName: '',
    role: 'farmer', // Default role, adjust as needed
    gender: '',
    age: '',
    language: ''
  });
  const [error, setError] = useState('');
  const history = useHistory();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/auth/register', user);
      alert('Signup successful! You can now login.');
      history.push('/login'); // Redirect to login after successful signup
    } catch (err) {
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        name="phoneNo"
        placeholder="Phone Number"
        value={user.phoneNo}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={user.password}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={user.firstName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={user.lastName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="gender"
        placeholder="Gender"
        value={user.gender}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={user.age}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="language"
        placeholder="Language"
        value={user.language}
        onChange={handleChange}
        required
      />
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;

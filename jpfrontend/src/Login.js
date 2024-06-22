import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import Navigation from "./Navigation";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      login(json.authToken);
      navigate("/");
    } else {
      alert("Enter valid information");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Navigation/>
    <div className="container mt-5 d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              name="email" 
              value={credentials.email} 
              onChange={onChange} 
              required 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="password" 
              name="password" 
              value={credentials.password} 
              onChange={onChange} 
              required 
            />
          </div>
          <button type="submit" className="btn btn-success w-100">Submit</button>
          <div className="d-flex mt-3">
          <Link to="/signup" className="btn btn-primary flex-fill me-2">New User? Signup</Link>
          <Link to="/otplogin" className="btn btn-info flex-fill">Login with OTP</Link>
       </div>
        </form>
      </div>
    </div>
    </div>
  );
}
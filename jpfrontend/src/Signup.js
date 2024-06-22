import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
export default function Signup() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ name: "", email: "", geolocation: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting credentials:", credentials);
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      navigate("/login");  // Navigate to login page on successful signup
    } else {
      alert("Enter valid information");
    }
  };

  const onChange = (e) => setCredentials({ ...credentials, [e.target.name]: e.target.value });

  return (
    <div><Navigation/>
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="card shadow p-4" style={{ minWidth: "300px", maxWidth: "400px" }}>
        <h2 className="card-title text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" value={credentials.name} onChange={onChange} />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange} />
          </div>

          {/* Location */}
          <div className="mb-3">
            <label htmlFor="location" className="form-label">Address</label>
            <input type="text" className="form-control" id="location" name="geolocation" value={credentials.geolocation} onChange={onChange} />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange} />
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to="/" className="btn btn-success">Already a user? Login</Link>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}
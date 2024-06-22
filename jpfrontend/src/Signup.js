import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Signup.css';
import Navigation from "./Navigation";
export default function Signup() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ 
    name: "", lastName: "", email: "", phoneNo: "", geolocation: "", 
    password: "", role: "", gender: "", age: "", language: "" 
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting credentials:", credentials);
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: credentials.name,
        lastName: credentials.lastName,
        email: credentials.email,
        phoneNo: credentials.phoneNo,
        password: credentials.password,
        location: credentials.geolocation,
        role: credentials.role,
        gender: credentials.gender,
        age: credentials.age,
        language: credentials.language
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
    <div>
      <Navigation/>
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="card shadow p-4">
        <h2 className="card-title text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit} className="sign-up">
          <div className="row">
            <div className="col-md-6">
              {/* First Name */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">First Name</label>
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
              {/* Role */}
              <div className="mb-3">
                <label htmlFor="role" className="form-label">Role</label>
                <input type="text" className="form-control" id="role" name="role" value={credentials.role} onChange={onChange} />
              </div>
              {/* Age */}
              <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input type="number" className="form-control" id="age" name="age" value={credentials.age} onChange={onChange} />
              </div>
            </div>
            <div className="col-md-6">
              {/* Last Name */}
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="lastName" name="lastName" value={credentials.lastName} onChange={onChange} />
              </div>
              {/* Phone Number */}
              <div className="mb-3">
                <label htmlFor="phoneNo" className="form-label">Phone Number</label>
                <input type="text" className="form-control" id="phoneNo" name="phoneNo" value={credentials.phoneNo} onChange={onChange} />
              </div>
              {/* Password */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange} />
              </div>
              {/* Gender */}
              <div className="mb-3">
                <label htmlFor="gender" className="form-label">Gender</label>
                <input type="text" className="form-control" id="gender" name="gender" value={credentials.gender} onChange={onChange} />
              </div>
              {/* Language */}
              <div className="mb-3">
                <label htmlFor="language" className="form-label">Language</label>
                <input type="text" className="form-control" id="language" name="language" value={credentials.language} onChange={onChange} />
              </div>
            </div>
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to="/login" className="btn btn-success">Already a user? Login</Link>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

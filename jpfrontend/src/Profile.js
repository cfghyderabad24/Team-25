import React, { useState, useEffect } from 'react';
import { Grid, TextField, InputLabel, Button, MenuItem, Select, IconButton } from '@mui/material';
import Axios from 'axios';
import Navigation from './Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css'; // Custom CSS for additional styling

function Profile() {
  const [detail, setDetail] = useState({
    firstName: '',
    lastName: '',
    phoneNo: '',
    address: '',
    age: '',
    gender: 'Male',
    language: '',
    role: '',
  });

  useEffect(() => {
    Axios.get("http://localhost:8081/prof")
      .then((res) => {
        setDetail(res.data);
      })
      .catch((error) => {
        console.error('Error fetching profile details:', error);
      });
  }, []);

  const handleChange = (e) => {
    setDetail({ ...detail, [e.target.name]: e.target.value });
  };

  const updateProfile = () => {
    Axios.post('http://localhost:8081/proupdate', detail)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.error('Error updating profile:', error);
      });
  };

  return (
    <div>
      <Navigation />
      <div className="container pbody">
        <div className="row">
          <div className="col-md-4 bleft">
            <ul className="list-unstyled">
              <li>
                <img src="" alt="Profile" className="img-fluid rounded-circle" />
              </li>
              <br />
              <li><h3>{detail.firstName} {detail.lastName}</h3></li>
              <br />
              <li><a href="/profile" className="btn btn-link">Profile</a></li>
            </ul>
          </div>
          <div className="col-md-8 bright">
            <h3>General Information</h3>
            <br />
            <form>
              <div className="form-group">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <InputLabel>First Name</InputLabel>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      value={detail.firstName}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputLabel>Last Name</InputLabel>
                    <TextField
                      required
                      fullWidth
                      name="lastName"
                      autoComplete="family-name"
                      value={detail.lastName}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className="form-group">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <InputLabel>Phone Number</InputLabel>
                    <TextField
                      required
                      fullWidth
                      name="phoneNo"
                      value={detail.phoneNo}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputLabel>Address</InputLabel>
                    <TextField
                      required
                      fullWidth
                      name="address"
                      value={detail.address}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className="form-group">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <InputLabel>Age</InputLabel>
                    <TextField
                      required
                      fullWidth
                      name="age"
                      value={detail.age}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputLabel>Gender</InputLabel>
                    <Select
                      name="gender"
                      value={detail.gender}
                      onChange={handleChange}
                      fullWidth
                    >
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Female">Female</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </div>
              <div className="form-group">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <InputLabel>Language</InputLabel>
                    <TextField
                      required
                      fullWidth
                      name="language"
                      value={detail.language}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputLabel>Role</InputLabel>
                    <TextField
                      required
                      fullWidth
                      name="role"
                      value={detail.role}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </div>
              <br />
              <div className="form-group d-flex justify-content-start">
                <Button variant="contained" color="primary" onClick={updateProfile} className="mr-2">
                  Update
                </Button>
                <Button variant="contained" color="secondary">
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

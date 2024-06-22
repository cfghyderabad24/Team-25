import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
  const navigate = useNavigate();
  const [role, setRole] = useState(null);

  useEffect(() => {
    Axios.get("http://localhost:8081/prof")
      .then((resp) => {
        setRole(resp.data.role);
      })
      .catch((error) => {
        console.error('Error fetching profile details:', error);
      });
  }, []);

  function logout() {
    Axios.post("http://localhost:8081/logout", null)
      .then((res) => {
        window.alert("Logged out successfully");
        navigate("/");
      })
      .catch((error) => {
        console.error('Error during logout:', error);
      });
  }

  const adminLinks = (
    <>
      <Nav.Link href='/home'>Home</Nav.Link>
      <Nav.Link href='/profile'>Profile</Nav.Link>
      <Nav.Link href='/recent-reports'>Recent-All-Reports</Nav.Link>
      <Nav.Link href='/queries-helping'>Queries Helping</Nav.Link>
      <Nav.Link href='/creating-user'>Creating User</Nav.Link>
      <Nav.Link href='/visualization'>Visualization</Nav.Link>
      <Nav.Link href='/farmer-volunteer-mapping'>Farmer-Volunteer Mapping</Nav.Link>
      <Nav.Link href='/' onClick={logout} className='ms-auto'>Logout</Nav.Link>
    </>
  );

  const userFarmerLinks = (
    <>
      <Nav.Link href='/home'>Home</Nav.Link>
      <Nav.Link href='/profile'>Profile</Nav.Link>
      <Nav.Link href='/recent-reports'>Recent Reports</Nav.Link>
      <Nav.Link href='/queries-helping'>Queries Helping</Nav.Link>
      <Nav.Link href='/visualization'>Yield-Visualization</Nav.Link>
      <Nav.Link href='/farmer-volunteer-mapping'>Farmer-Volunteer Mapping</Nav.Link>
      <Nav.Link href='/' onClick={logout} className='ms-auto'>Logout</Nav.Link>
    </>
  );

  const volunteerLinks = (
    <>
      <Nav.Link href='/home'>Home</Nav.Link>
      <Nav.Link href='/profile'>Profile</Nav.Link>
      <Nav.Link href='/recent-reports'>Recent Reports</Nav.Link>
      <Nav.Link href='/upload-reports'>Upload Reports</Nav.Link>
      <Nav.Link href='/upload-reports'>Upload Post-Analysis-Form</Nav.Link>
      <Nav.Link href='/queries-helping'>Queries Helping</Nav.Link>
      <Nav.Link href='/farmer-volunteer-mapping'>Farmer-Volunteer Mapping</Nav.Link>
      <Nav.Link href='/' onClick={logout} className='ms-auto'>Logout</Nav.Link>
    </>
  );

  const guestLinks = (
    <>
      <Nav.Link href='/home'>Home</Nav.Link>
      <Nav.Link href='/'>Login</Nav.Link>
      <Nav.Link href='/signup'>Sign Up</Nav.Link>
    </>
  );

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/home">IFTR</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {role === 'admin' ? adminLinks : role === 'volunteer' ? volunteerLinks : role === 'user' ? userFarmerLinks : guestLinks}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

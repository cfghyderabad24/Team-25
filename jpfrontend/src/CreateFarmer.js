import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Axios from 'axios';
import Navigation from './Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

function CreateFarmer() {
  const [farmerDetails, setFarmerDetails] = useState({
    firstName: '',
    lastName: '',
    phoneNo: '',
    address: '',
    age: '',
    gender: 'Male', // Default value for gender
    language: '',
    role: 'farmer', // Default role set to 'farmer'
  });

  const handleChange = (e) => {
    setFarmerDetails({ ...farmerDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:8081/createfarmer', farmerDetails)
      .then((resp) => {
        alert('Farmer created successfully');
      })
      .catch((error) => {
        console.error('Error creating farmer:', error);
      });
  };

  return (
    <div>
      <Navigation />
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <h2 className="mt-5">Create Farmer</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  name="firstName"
                  value={farmerDetails.firstName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  name="lastName"
                  value={farmerDetails.lastName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="phoneNo">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter phone number"
                  name="phoneNo"
                  value={farmerDetails.phoneNo}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter address"
                  name="address"
                  value={farmerDetails.address}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="age">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter age"
                  name="age"
                  value={farmerDetails.age}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  as="select"
                  name="gender"
                  value={farmerDetails.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="language">
                <Form.Label>Language</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter language"
                  name="language"
                  value={farmerDetails.language}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              {/* Hidden role field */}
              <Form.Control
                type="hidden"
                name="role"
                value={farmerDetails.role}
              />
              <Button variant="primary" type="submit" className="mt-3">
                Create Farmer
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CreateFarmer;

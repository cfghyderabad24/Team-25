import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
const RaiseRequest = () => {
  const [formData, setFormData] = useState({
    description: '',
    image: null
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('description', formData.description);
    data.append('image', formData.image);

    Axios.post('http://localhost:8081/api/raise-request', data)
      .then((response) => {
        console.log('Request submitted successfully:', response);
        navigate('/expert-guidances');
      })
      .catch((error) => {
        console.error('Error submitting request:', error);
      });
  };

  return (
    <div>
        <Navigation/>
    <Container className="mt-5">
      <h2>Raise a New Request</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formImage">
          <Form.Label>Problem Image</Form.Label>
          <Form.Control
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
    </div>
  );
};

export default RaiseRequest;

import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';

const SoilAnalysisForm = () => {
  const [formData, setFormData] = useState({
    mobileNumber: '',
    nitrogenValue: '',
    phosphorousValue: '',
    potassiumValue: '',
    calciumValue: '',
    magnesiumValue: '',
    zincValue: '',
    ironValue: '',
    manganeseValue: '',
    copperValue: '',
    sodiumValue: '',
    sulphurValue: '',
    salinity: '',
    phValue: '',
    recommendation: '',
    cropName: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div>
      <Navigation/>
    <div className="container mt-5">
      <h2>Soil Analysis Form</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formMobileNumber">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter mobile number"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {[
          { label: 'Nitrogen', name: 'nitrogen' },
          { label: 'Phosphorous', name: 'phosphorous' },
          { label: 'Potassium', name: 'potassium' },
          { label: 'Calcium', name: 'calcium' },
          { label: 'Magnesium', name: 'magnesium' },
          { label: 'Zinc', name: 'zinc' },
          { label: 'Iron', name: 'iron' },
          { label: 'Manganese', name: 'manganese' },
          { label: 'Copper', name: 'copper' },
          { label: 'Sodium', name: 'sodium' },
          { label: 'Sulphur', name: 'sulphur' }
        ].map((nutrient, index) => (
          <Row className="mb-3" key={index}>
            <Form.Group as={Col} controlId={`form${nutrient.label}Value`}>
              <Form.Label>{nutrient.label} Value</Form.Label>
              <Form.Control
                type="text"
                placeholder={`Enter ${nutrient.label.toLowerCase()} value`}
                name={`${nutrient.name}Value`}
                value={formData[`${nutrient.name}Value`]}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Row>
        ))}

        <Form.Group className="mb-3" controlId="formSalinity">
          <Form.Label>Salinity</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter salinity"
            name="salinity"
            value={formData.salinity}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhValue">
          <Form.Label>pH Value</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter pH value"
            name="phValue"
            value={formData.phValue}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formRecommendation">
          <Form.Label>Recommendation</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter recommendation"
            name="recommendation"
            value={formData.recommendation}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCropName">
          <Form.Label>Crop Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter crop name"
            name="cropName"
            value={formData.cropName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    </div>
  );
}

export default SoilAnalysisForm;

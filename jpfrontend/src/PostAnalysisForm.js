import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';

const PostAnalysisForm = () => {
  const [formData, setFormData] = useState({
    farmerName: '',
    address: '',
    aadharNumber: '',
    contactNumber: '',
    ownLand: '',
    season: '',
    soilAnalysis: '',
    seedsUsed: '',
    landPreparation: '',
    dateOfSeedSowing: '',
    weedingSchedule: '',
    fertilizersUse: '',
    fertilizerApplicationDays: '',
    cropProtectionDays: '',
    dateOfHarvesting: '',
    yieldProduced: ''
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
      <h2>Post Analysis Form</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formFarmerName">
          <Form.Label>Farmer's Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter farmer's name"
            name="farmerName"
            value={formData.farmerName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAadharNumber">
          <Form.Label>Aadhar Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Aadhar number"
            name="aadharNumber"
            value={formData.aadharNumber}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContactNumber">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter contact number"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formOwnLand">
          <Form.Label>Own land (acres)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter land in acres"
            name="ownLand"
            value={formData.ownLand}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formSeason">
          <Form.Label>Season</Form.Label>
          <Form.Control
            as="select"
            name="season"
            value={formData.season}
            onChange={handleChange}
            required
          >
            <option value="">Select season</option>
            <option value="Navaraj">Navaraj</option>
            <option value="Sornavari">Sornavari</option>
            <option value="Kar">Kar</option>
            <option value="Kuruvai">Kuruvai</option>
            <option value="Early Samba">Early Samba</option>
            <option value="Samba">Samba</option>
            <option value="Late Samba">Late Samba</option>
            <option value="Thaladi">Thaladi</option>
            <option value="Pishanam">Pishanam</option>
            <option value="Late Pishanam">Late Pishanam</option>
            <option value="Late Thaladi">Late Thaladi</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formSoilAnalysis">
          <Form.Label>Soil Analysis</Form.Label>
          <Form.Control
            as="select"
            name="soilAnalysis"
            value={formData.soilAnalysis}
            onChange={handleChange}
            required
          >
            <option value="">Select soil analysis</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formSeedsUsed">
          <Form.Label>Seeds Used</Form.Label>
          <Form.Control
            as="select"
            name="seedsUsed"
            value={formData.seedsUsed}
            onChange={handleChange}
            required
          >
            <option value="">Select seeds used</option>
            <option value="Own">Own</option>
            <option value="By IFTR">By IFTR</option>
            <option value="Outside">Outside</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLandPreparation">
          <Form.Label>Land Preparation (Ploughing X times)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter number of times"
            name="landPreparation"
            value={formData.landPreparation}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDateOfSeedSowing">
          <Form.Label>Date of Seed Sowing</Form.Label>
          <Form.Control
            type="date"
            name="dateOfSeedSowing"
            value={formData.dateOfSeedSowing}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formWeedingSchedule">
          <Form.Label>Weeding Schedule</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter weeding schedule"
            name="weedingSchedule"
            value={formData.weedingSchedule}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formFertilizersUse">
          <Form.Label>Fertilizers Use</Form.Label>
          <Form.Control
            as="select"
            name="fertilizersUse"
            value={formData.fertilizersUse}
            onChange={handleChange}
            required
          >
            <option value="">Select fertilizers use</option>
            <option value="Organic">Organic</option>
            <option value="Chemical">Chemical</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formFertilizerApplicationDays">
          <Form.Label>Fertilizer Application Days</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter fertilizer application days"
            name="fertilizerApplicationDays"
            value={formData.fertilizerApplicationDays}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCropProtectionDays">
          <Form.Label>Crop Protection Days</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter crop protection days"
            name="cropProtectionDays"
            value={formData.cropProtectionDays}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDateOfHarvesting">
          <Form.Label>Date of Harvesting</Form.Label>
          <Form.Control
            type="date"
            name="dateOfHarvesting"
            value={formData.dateOfHarvesting}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formYieldProduced">
          <Form.Label>Yield Produced</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter yield produced"
            name="yieldProduced"
            value={formData.yieldProduced}
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
};

export default PostAnalysisForm;

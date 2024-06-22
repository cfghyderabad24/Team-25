import React, { useState, useEffect } from 'react';
import { Button, Form, InputGroup, Alert } from 'react-bootstrap';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';

function LoginWithOtp() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpField, setShowOtpField] = useState(false);
  const [timer, setTimer] = useState(30);
  const [otpSent, setOtpSent] = useState(false);

  useEffect(() => {
    let countdown;
    if (showOtpField && timer > 0) {
      countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(countdown);
    }

    return () => clearInterval(countdown);
  }, [showOtpField, timer]);

  const handleMobileNumberChange = (e) => {
    const value = e.target.value;
    if (value.length <= 10) {
      setMobileNumber(value);
    }

    if (value.length < 10) {
      setShowOtpField(false);
      setOtpSent(false);
      setTimer(30);
    }
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSendOtp = () => {
    Axios.post('http://localhost:8081/send-otp', { mobileNumber })
      .then((response) => {
        setOtpSent(true);
        setTimer(30);
        setShowOtpField(true);
      })
      .catch((error) => {
        console.error('Error sending OTP:', error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowOtpField(true);
  };

  return (
    <div>
      <Navigation />
      <div className="container mt-5">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formMobileNumber">
            <Form.Label>Mobile Number</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Enter mobile number"
                value={mobileNumber}
                onChange={handleMobileNumberChange}
                required
              />
              <Button
                variant="primary"
                onClick={handleSendOtp}
                disabled={mobileNumber.length !== 10 || otpSent}
              >
                Send OTP
              </Button>
            </InputGroup>
          </Form.Group>

          {showOtpField && (
            <>
              <Form.Group className="mb-3" controlId="formOtp">
                <Form.Label>OTP</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={handleOtpChange}
                  required
                  maxLength={4}
                />
              </Form.Group>
              <Alert variant="info">Time left: {timer} seconds</Alert>
            </>
          )}

          {otp && (
            <Button variant="success" type="submit">
              Submit
            </Button>
          )}
        </Form>
      </div>
    </div>
  );
}

export default LoginWithOtp;

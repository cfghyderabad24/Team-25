const express = require('express');
const User = require('../models/user');
const generateAndSendOtp = require('../utils/generateAndSendOtp');

const router = express.Router();

// Register route
router.post('/register', async (req, res) => {
  try {
    const { phoneNo, firstName, lastName, role, gender, age, language } = req.body;

    const user = new User({ phoneNo, firstName, lastName, role, gender, age, language });
    await user.save();
    
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'User registration failed' });
  }
});

// Login route (generate OTP)
router.post('/login', async (req, res) => {
  try {
    const { phoneNo } = req.body;
    await generateAndSendOtp(phoneNo);
    
    res.status(200).json({ message: 'OTP sent' });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Login failed' });
  }
});

// Verify OTP route
router.post('/verify-otp', async (req, res) => {
  try {
    const { phoneNo, otp } = req.body;
    const user = await User.findOne({ phoneNo });
    if (!user) throw new Error('User not found');

    if (user.otp !== otp) {
      return res.status(400).json({ error: 'Invalid OTP' });
    }

    res.status(200).json({ message: 'OTP verified', user });
  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(500).json({ error: 'OTP verification failed' });
  }
});

module.exports = router;

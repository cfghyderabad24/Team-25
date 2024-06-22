const Nexmo = require('nexmo');
const User = require('../models/user');
require('dotenv').config();

const nexmo = new Nexmo({
  apiKey: process.env.NEXMO_API_KEY,
  apiSecret: process.env.NEXMO_API_SECRET,
});

async function generateAndSendOtp(phoneNo) {
  try {
    const user = await User.findOne({ phoneNo });
    if (!user) throw new Error('User not found');

    await user.setOtp();

    nexmo.message.sendSms(
      process.env.NEXMO_FROM_NUMBER,
      `91${phoneNo}`, // Adjust for country code
      `Your OTP is: ${user.otp}`,
      (err, responseData) => {
        if (err) {
          console.error('Error sending OTP:', err);
        } else {
          console.log('OTP sent:', responseData);
        }
      }
    );
  } catch (err) {
    console.error('Error generating or sending OTP:', err);
    throw err;
  }
}

module.exports = generateAndSendOtp;

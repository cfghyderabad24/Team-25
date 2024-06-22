const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    phoneNo: {
        type: Number,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true,
        
    },
    lastName: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    ledger: {
        type: Schema.Types.ObjectId,
        ref: 'Ledger'
    },
    otp: {
        type: String
    }


});

UserSchema.methods.setOtp = function () {
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
    this.otp = otp;
    return this.save();
  };


module.exports = mongoose.model('User', UserSchema);
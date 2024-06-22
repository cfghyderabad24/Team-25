const mongoose = require('mongoose');
const soilSchema = new mongoose.Schema({
    phoneNumber : {
        type:Number,
        required: true,
    },
    nitrogen : {
        type:Number,
        required: true,
    },
    phosphorus : {
        type: Number,
        required : true,
    },
    potassium : {
        type : Number,
        required : true,
    },
    calcium : {
        type : Number,
        required : true,
    },
    magnesium : {
        type : Number,
        required : true,
    },
    salinity : {
        type : Number, 
        required : true,
        min: [1000],
        max: [3000],
    },
    zinc : {
        type : Number,
        required : true,
    },
    iron : {
        type : Number,
        required : true,
    },
    manganese : {
        type : Number,
        required : true,
    },
    copper : {
        type : Number,
        required : true,
    },
    sodium : {
        type : Number,
        required : true,
    },
    sulphur : {
        type : Number,
        required : true,
    },
    ph : {
        type: Number,
    required: true,
    min: [0],
    max: [14],
    },
    recommendation : {
        type : String,
        required : true,
    },
    cropName : {
        type : String,
        required : true,
    }
  });

module.exports = mongoose.model('Soil', soilSchema);

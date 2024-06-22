const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ledgerSchema = new mongoose.Schema({
    UserId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    pincode: {
        type: Number,
        required: true
    },
    aadharNumber: {
        type: Number,
        required: true,
    },
    phoneNo: {
        type: Number,
        required: true,
        unique: true
    },
    villageName: {
        type: String,
        required: true
    },
    areaPloughed: {
        type: Number,
        required: true
    },
    season: {
        type: String,
        ENUM: ['Kharif', 'rabi'],
        required: true
    },
    crop: {
        type: String,
        required: true
    },
    soilAnalysis: {
        type: Boolean,
    },

    seedsUsed: {
        variety: {
            type: String,
            ENUM: ['own', 'iftr', 'outside'],
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    },
    landPreparation: {
        type: Number,
        ENUM: [3, 4, 5]
    },
    dateSown: {
        method: {
            type: String,
            ENUM: ['directSeeding', 'SRI', 'Transplanting']
        },
        onDate: {
            type: Date,
            required: true
        }

    },

    irrigationMethod: {
        type: String,
        required: true
    },
    WeedingSchedule: {
        first: {
            type: Date
        },
        second: {
            type: Date
        }
    },
    fertilizers: {
        type: String,
        required: true
    },
    fertilizerApplicationDays: {
        basal: { type: Date }, dayOne: {
            type: Date
        },
        dayTwo: {
            type: Date
        },
        dayThree: {
            type: Date
        },
        dayFour: {
            type: Date
        }
    },
    cropprotectiondays: {
        dayOne: {
            type: Date
        },
        dayTwo: {
            type: Date
        }
    },
    dateHarvesting: {
        type: Date,
        required: true
    },
    yield: {
        type: Number,
        required: true
    }
});

const Ledger = mongoose.model('Ledger', ledgerSchema);

module.exports = Ledger;

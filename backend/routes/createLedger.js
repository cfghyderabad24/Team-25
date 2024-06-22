const express = require('express');
const router = express.Router();
const Ledger = require('../models/ledger');
const auth = require('../middleware/auth');

// Create a new Ledger entry
router.post('/create', auth, async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            pincode,
            aadharNumber,
            phoneNo,
            villageName,
            areaPloughed,
            season,
            crop,
            soilAnalysis,
            seedsUsed,
            landPreparation,
            dateSown,
            irrigationMethod,
            weedingSchedule,
            fertilizers,
            fertilizerApplicationDays,
            cropprotectiondays,
            dateHarvesting,
            yield
        } = req.body;

        // Create new Ledger entry
        const ledger = new Ledger({
            userId: req.user._id,
            firstName,
            lastName,
            pincode,
            aadharNumber,
            phoneNo,
            villageName,
            areaPloughed,
            season,
            crop,
            soilAnalysis,
            seedsUsed,
            landPreparation,
            dateSown,
            irrigationMethod,
            weedingSchedule,
            fertilizers,
            fertilizerApplicationDays,
            cropprotectiondays,
            dateHarvesting,
            yield
        });

        await ledger.save();
        res.status(201).json({ message: 'Ledger entry created successfully', ledger });
    } catch (error) {
        console.error('Error creating ledger entry:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
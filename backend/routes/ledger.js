const express = require('express');
const router = express.Router();
const Ledger = require('../models/ledger');

// GET route to count ledgers by village name
router.get('/count-by-village', async (req, res) => {
    try {
        const { villageName } = req.query;
        if (!villageName) {
            return res.status(400).json({ error: 'villageName query parameter is required' });
        }

        const count = await Ledger.countDocuments({ villageName });
        res.status(200).json({ villageName, count });
    } catch (error) {
        console.error('Error counting farmers by village:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
router.get('/count-by-crop', async (req, res) => {
    try {
        const { crop } = req.query;
        if (!crop) {
            return res.status(400).json({ error: 'crop query parameter is required' });
        }

        const count = await Ledger.countDocuments({ crop });
        res.status(200).json({ crop, count });
    } catch (error) {
        console.error('Error counting farmers by crop:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
router.get('/count-by-irrigation-method', async (req, res) => {
    try {
        const { irrigationMethod } = req.query;
        if (!irrigationMethod) {
            return res.status(400).json({ error: 'irrigationMethod query parameter is required' });
        }

        const count = await Ledger.countDocuments({ irrigationMethod });
        res.status(200).json({ irrigationMethod, count });
    } catch (error) {
        console.error('Error counting farmers by irrigationMethod:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/total-yield-by-variety', async (req, res) => {
    try {
        const { variety } = req.query;
        if (!variety) {
            return res.status(400).json({ error: 'variety query parameter is required' });
        }

        const totalYield = await Ledger.aggregate([
            { $match: { 'seedsUsed.variety': variety } },
            { $group: { _id: null, totalYield: { $sum: '$yield' } } }
        ]);

        res.status(200).json({ variety, totalYield: totalYield[0]?.totalYield || 0 });
    } catch (error) {
        console.error('Error calculating total yield:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/total-yield-by-fertilizer', async (req, res) => {
    try {
        const { fertilizer } = req.query;
        if (!fertilizer) {
            return res.status(400).json({ error: 'fertilizer query parameter is required' });
        }

        const totalYield = await Ledger.aggregate([
            { $match: { fertilizers: fertilizer } },
            { $group: { _id: null, totalYield: { $sum: '$yield' } } }
        ]);

        res.status(200).json({ fertilizer, totalYield: totalYield[0]?.totalYield || 0 });
    } catch (error) {
        console.error('Error calculating total yield by fertilizer:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



router.get('/count-by-area-ploughed', async (req, res) => {
    try {
        const { area } = req.query;
        const count = await Ledger.countDocuments({ areaPloughed: { $lt: area } });

        res.status(200).json({ areaPloughedLessThan: area, count });
    } catch (error) {
        console.error('Error counting records by areaPloughed:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;

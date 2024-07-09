const express = require('express');
const router = express.Router();
const Donor = require('../models/Donor');

// Get all donors
router.get('/', async (req, res) => {
  try {
    const donors = await Donor.find();
    res.json(donors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new donor
router.post('/', async (req, res) => {
  const donor = new Donor({
    name: req.body.name,
    bloodType: req.body.bloodType,
    contact: req.body.contact,
    location: req.body.location
  });
  try {
    const newDonor = await donor.save();
    res.status(201).json(newDonor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;


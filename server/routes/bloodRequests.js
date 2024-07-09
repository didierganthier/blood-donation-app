const express = require('express');
const router = express.Router();
const BloodRequest = require('../models/BloodRequest');

// Get all blood requests
router.get('/', async (req, res) => {
  try {
    const requests = await BloodRequest.find();
    res.json(requests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new blood request
router.post('/', async (req, res) => {
  const request = new BloodRequest({
    patientName: req.body.patientName,
    bloodType: req.body.bloodType,
    contact: req.body.contact,
    location: req.body.location,
    neededBy: req.body.neededBy,
  });
  try {
    const newRequest = await request.save();
    res.status(201).json(newRequest);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;


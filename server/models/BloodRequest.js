const mongoose = require('mongoose');

const BloodRequestSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  bloodType: { type: String, required: true },
  contact: { type: String, required: true },
  location: { type: String, required: true },
  neededBy: { type: Date, required: true },
});

module.exports = mongoose.model('BloodRequest', BloodRequestSchema);


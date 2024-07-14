import React, { useState } from 'react';
import { createBloodRequest } from '../services/bloodRequestService';

const BloodRequestForm = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    bloodType: '',
    contact: '',
    location: '',
    neededBy: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createBloodRequest(formData);
    setFormData({ patientName: '', bloodType: '', contact: '', location: '', neededBy: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="patientName" placeholder="Patient Name" value={formData.patientName} onChange={handleChange} />
      <input type="text" name="bloodType" placeholder="Blood Type" value={formData.bloodType} onChange={handleChange} />
      <input type="text" name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange} />
      <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
      <input type="date" name="neededBy" placeholder="Needed By" value={formData.neededBy} onChange={handleChange} />
      <button type="submit">Create Blood Request</button>
    </form>
  );
};

export default BloodRequestForm;

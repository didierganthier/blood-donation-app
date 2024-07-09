import React, { useState } from 'react';
import { createDonor } from '../services/donorService';

const DonorForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    bloodType: '',
    contact: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createDonor(formData);
    setFormData({ name: '', bloodType: '', contact: '', location: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input type="text" name="bloodType" placeholder="Blood Type" value={formData.bloodType} onChange={handleChange} />
      <input type="text" name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange} />
      <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
      <button type="submit">Add Donor</button>
    </form>
  );
};

export default DonorForm;


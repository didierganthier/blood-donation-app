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
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <form className="max-w-lg bg-white p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Register as a Donor</h1>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
            value={formData.name} 
            onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="bloodType">Blood Type</label>
          <input 
            type="text" 
            id="bloodType" 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
            value={formData.bloodType} 
            onChange={(e) => setFormData({ ...formData, bloodType: e.target.value })}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="contact">Contact</label>
          <input 
            type="text" 
            id="contact" 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
            value={formData.contact} 
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="location">Location</label>
          <input 
            type="text" 
            id="location" 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
            value={formData.location} 
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          />
        </div>
        <button type="submit" className="w-full px-6 py-2 bg-red-500 text-white rounded-lg">Register</button>
      </form>
    </div>
  );
};

export default DonorForm;

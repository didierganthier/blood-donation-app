import React, { useEffect, useState } from 'react';
import { getDonors } from '../services/donorService';

const DonorList = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getDonors();
      setDonors(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Donor List</h1>
        <ul>
          {donors.map((donor, index) => (
            <li key={index} className="flex justify-between items-center mb-4 p-4 bg-gray-50 rounded-lg shadow-sm">
              <span className="text-gray-700 font-medium">{donor.name}</span>
              <span className="text-gray-500">{donor.bloodType}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DonorList;

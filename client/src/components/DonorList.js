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
    <div>
      <h2>Donor List</h2>
      <ul>
        {donors.map(donor => (
          <li key={donor._id}>{donor.name} - {donor.bloodType}</li>
        ))}
      </ul>
    </div>
  );
};

export default DonorList;


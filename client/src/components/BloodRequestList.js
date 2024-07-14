import React, { useEffect, useState } from 'react';
import { getBloodRequests } from '../services/bloodRequestService';

const BloodRequestList = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getBloodRequests();
      setRequests(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Blood Request List</h2>
      <ul>
        {requests.map(request => (
          <li key={request._id}>{request.patientName} needs {request.bloodType} blood by {new Date(request.neededBy).toLocaleDateString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default BloodRequestList;

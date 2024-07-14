import React from 'react';
import DonorList from './components/DonorList';
import DonorForm from './components/DonorForm';
import BloodRequestList from './components/BloodRequestList';
import BloodRequestForm from './components/BloodRequestForm';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DonorList />} />
        <Route path="/add-donor" index element={<DonorForm />} />
        <Route path="/blood-requests" index element={<BloodRequestList />} />
        <Route path="/add-blood-request" index element={<BloodRequestForm />} />
      </Routes>
    </div>
  );
}

export default App;

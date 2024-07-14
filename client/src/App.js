import React from 'react';
import DonorList from './components/DonorList';
import DonorForm from './components/DonorForm';
import BloodRequestList from './components/BloodRequestList';
import BloodRequestForm from './components/BloodRequestForm';

import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donors" element={<DonorList />} />
        <Route path="/add-donor" index element={<DonorForm />} />
        <Route path="/blood-requests" index element={<BloodRequestList />} />
        <Route path="/add-blood-request" index element={<BloodRequestForm />} />
      </Routes>
    </div>
  );
}

export default App;

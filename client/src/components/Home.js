// src/pages/Home.js
import React from 'react';

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Blood Donation App</h1>
        <p className="text-gray-600 mb-6">Join our community and help save lives by donating blood or requesting blood donations.</p>
        <div className="flex space-x-4">
          <a href="/add-donor" className="px-6 py-2 bg-red-500 text-white rounded-lg">Register as Donor</a>
          <a href="/add-blood-request" className="px-6 py-2 bg-blue-500 text-white rounded-lg">Request Blood</a>
        </div>
      </div>
    </div>
  );
}

export default Home;

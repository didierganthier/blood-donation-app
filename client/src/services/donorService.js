import axios from 'axios';

const API_URL = 'http://localhost:5000/api/donors';

export const getDonors = async () => {
  return await axios.get(API_URL);
};

export const createDonor = async (donor) => {
  return await axios.post(API_URL, donor);
};


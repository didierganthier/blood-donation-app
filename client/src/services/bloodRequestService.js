import axios from 'axios';

const API_URL = 'http://localhost:5001/api/blood-requests';

export const getBloodRequests = async () => {
  return await axios.get(API_URL);
};

export const createBloodRequest = async (request) => {
  return await axios.post(API_URL, request);
};

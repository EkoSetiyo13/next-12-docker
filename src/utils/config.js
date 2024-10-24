// src/services/config.js
import axios from 'axios';

export const getConfig = async () => {
  try {
    const response = await axios.get('/api/hello');
    return response.data;
  } catch (error) {
    console.error('Error fetching config:', error);
    return {};
  }
};
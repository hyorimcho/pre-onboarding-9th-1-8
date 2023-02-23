import axios from 'axios';

const axiosConfig = {
  baseURL: 'https://pre-onboarding-selection-task.shop/',
  headers: {
    'Content-Type': 'application/json ',
  },
};

const client = axios.create(axiosConfig);
export default client;

client.interceptors.request.use((config) => {
  const token = localStorage.token;
  if (token !== null) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

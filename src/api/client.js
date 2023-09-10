import axios from 'axios';

// change the baseURL when you deploy your app
const client = axios.create({
  baseURL: 'http://localhost:8000/api',
});

export default client;

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://assessment-ecommerce.onrender.com', // Change to your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;

import axios from 'axios';

const renderApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

export default renderApi;

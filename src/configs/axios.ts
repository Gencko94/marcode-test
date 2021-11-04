import axios from 'axios';

const http = axios.create({
  headers: {
    'X-Tenant': 'androidworld.newsifier.com',
  },
  baseURL: 'https://microservice.newsifier.com/api',
});

export default http;

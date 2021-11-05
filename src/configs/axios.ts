import axios from 'axios';
import { BASE_URL } from '../lib/constants';

const http = axios.create({
  headers: {
    'X-Tenant': 'androidworld.newsifier.com',
    Authorization:
      'Bearer m8tiFyxZrZD1NGWNAjSu7dpPV8hlJOMLOqS2sWCGXXFllxFsHmGwrD3oT2Son1kXaEM6iRL22nLsgBPp',
  },
  baseURL: BASE_URL,
});

export default http;

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://task.server.brainstormtech.io',
});

export default axiosInstance;
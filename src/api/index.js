import axios from "axios";
const api = axios.create({
  baseURL: 'https://kinopoiskapiunofficial.tech/api',
  headers: {
    'X-API-KEY': "cbe789be-8e2d-426b-876a-280d6ebaf3fc",
    'Content-Type': "application/json",
  }
});

export default api;
import axios from "axios";
const api = axios.create({
  baseURL: 'https://kinopoiskapiunofficial.tech/api',
  headers: {
    'X-API-KEY': "00bc9ed2-f8a5-4804-879c-e0d35e3f6af3\n",
    'Content-Type': "application/json",
  }
});

export default api;
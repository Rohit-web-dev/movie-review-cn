"use client"
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'd29c74c11f75cd249a5460d9befd3525'
  }
});

export default api;
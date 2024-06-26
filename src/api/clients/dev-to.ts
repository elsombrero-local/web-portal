import axios from "axios";

export const DevToClient = axios.create({
  baseURL: 'https://dev.to/api/',
  headers: { 
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': '0',
  }
})
import axios from "axios";

export const WebPortalClient = axios.create({
  baseURL: '/',
  headers: { 
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': '0',
  }
})
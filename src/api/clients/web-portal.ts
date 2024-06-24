import axios from "axios";

export const WebPortalClient = axios.create({
  baseURL: '/',
})
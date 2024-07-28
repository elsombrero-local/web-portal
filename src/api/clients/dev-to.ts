import axios from "axios";
import { Config } from "../../config/config";

export const DevToClient = axios.create({
  baseURL: Config.DEV_TO_URL,
  headers: { 
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': '0',
  }
})
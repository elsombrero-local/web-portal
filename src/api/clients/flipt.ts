import axios from 'axios'
import { Config } from '../../config/config';

export const FliptClient = axios.create({
  baseURL: Config.FLIPT_URL,
  headers: {
    Authorization: `Bearer ${Config.FLIPT_API_KEY}`
  }
});

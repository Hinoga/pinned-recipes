import axios from 'axios';
import { API_CLIENT } from '../constants';

export const apiClient = axios.create({
  baseURL: API_CLIENT.apiUrl,
});

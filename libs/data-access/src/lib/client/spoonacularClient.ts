import axios from 'axios';
import { SPOONACULAR_CLIENT } from '../constants';

export const spoonacularClient = axios.create({
  baseURL: SPOONACULAR_CLIENT.apiUrl,
  headers: {
    apiKey: SPOONACULAR_CLIENT.apiKey,
  },
});

import axios from 'axios';
import { SPOONACULAR_CLIENT } from '../constants';

export const spoonacularClient = axios.create({
  baseURL: SPOONACULAR_CLIENT.apiUrl,
  params: {
    apiKey: SPOONACULAR_CLIENT.apiKey,
  },
});

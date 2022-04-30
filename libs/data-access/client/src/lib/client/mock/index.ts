import MockAdapter from 'axios-mock-adapter';

import { apiClient } from '../api';
import { spoonacularClient } from '../spoonacularClient';

export const mockApiClient = new MockAdapter(apiClient);
export const mockSpoonacularClient = new MockAdapter(spoonacularClient);

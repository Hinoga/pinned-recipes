import {
  SPOONACULAR_CLIENT,
  spoonacularClient,
} from 'libs/data-access/client/src';
import { GetRecipesType, RecipesResponse } from '../types';
import { recipeSuccessRequest } from './mocks/mockResponses';

export const getRecipes: GetRecipesType = async () => {
  // const { data } = await spoonacularClient.get<RecipesResponse>(
  //   SPOONACULAR_CLIENT.recipesPath
  // );
  // if (!data.results) throw new Error('No data');
  const data = await Promise.resolve(recipeSuccessRequest);
  return data;
};

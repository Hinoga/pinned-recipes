import { spoonacularClient } from '@pinned-recipes/data-access';
import { SPOONACULAR_CLIENT } from 'libs/data-access/src/lib/constants';
import { GetRecipesType, RecipesResponse } from '../types';

export const getRecipes: GetRecipesType = async () => {
  const { data } = await spoonacularClient.get<RecipesResponse>(
    SPOONACULAR_CLIENT.recipesPath
  );
  if (!data.results) throw new Error('No data');
  return data;
};

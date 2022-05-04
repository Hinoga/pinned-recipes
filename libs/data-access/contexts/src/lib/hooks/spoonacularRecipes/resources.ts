import { webClient } from '@pinned-recipes/data-access-client';
import { RecipesResponse } from '@pinned-recipes/spoonacular-client';

const BASE_PATH = '/spoonacular/recipes';

export const getData = async () => {
  try {
    const response = await webClient.get<RecipesResponse>(BASE_PATH);
    return response;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('Something went wrong');
  }
};

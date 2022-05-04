import {
  mockSpoonacularClient,
  SPOONACULAR_CLIENT,
} from '@pinned-recipes/data-access-client';
import { getRecipes } from '../';

import { recipeSuccessRequest } from '../mocks/mockResponses';

describe('Get Recipes', () => {
  test('Trigger getRecipes request', async () => {
    mockSpoonacularClient
      .onGet(`${SPOONACULAR_CLIENT.recipesPath}`)
      .reply(200, recipeSuccessRequest);

    const result = await getRecipes();

    expect(result).toEqual(recipeSuccessRequest);
    expect(mockSpoonacularClient.history['get']).toHaveLength(1);
  });
});

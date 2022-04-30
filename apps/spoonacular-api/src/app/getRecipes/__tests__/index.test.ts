import { mockSpoonacularClient } from '@pinned-recipes/data-access';
import getRecipes from '../';

import { SPOONACULAR_CLIENT } from 'libs/data-access/src/lib/constants';
import { recipeSuccessRequest } from '../mocks/mockResponses';

describe('Get Recipes', () => {
  test('Trigger getRecipes request', async () => {
    mockSpoonacularClient
      .onGet(`${SPOONACULAR_CLIENT.recipesPath}`)
      .reply(200, recipeSuccessRequest);

    const result = await getRecipes();

    expect(result).toEqual(recipeSuccessRequest);
    expect(mockSpoonacularClient.history.get).toHaveLength(1);
  });
});

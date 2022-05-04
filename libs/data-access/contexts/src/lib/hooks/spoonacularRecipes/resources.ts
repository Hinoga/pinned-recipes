import { webClient } from '@pinned-recipes/data-access-client';

const BASE_PATH = '/spoonacular/recipes';

export const getData = async () => {
  try {
    const response = await webClient(BASE_PATH);
    return response;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('Something went wrong');
  }
};

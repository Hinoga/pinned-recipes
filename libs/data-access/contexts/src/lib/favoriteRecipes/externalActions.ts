import { webClient } from '@pinned-recipes/data-access-client';
import { RecipeType } from '@pinned-recipes/spoonacular-client';
import { ExternalActionType } from './types';

const FAVORITE_RECIPE_PATH = '/favorite-recipes';

export const fetchFavoriteRecipes: ExternalActionType = async (dispatch) => {
  try {
    const recipes = await webClient.get<RecipeType[]>(FAVORITE_RECIPE_PATH);
    console.log(recipes);
    dispatch({ type: 'LOAD_RECIPES', payload: [] });
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error });
  }
};

export const addFavoriteRecipe: ExternalActionType = async (
  dispatch,
  payload
) => {
  try {
    await webClient.post<RecipeType>(FAVORITE_RECIPE_PATH, payload);
    dispatch({ type: 'ADD_RECIPE', payload });
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error });
  }
};

export const deleteFavoriteRecipe: ExternalActionType = async (
  dispatch,
  id
) => {
  try {
    await webClient.post<RecipeType>(FAVORITE_RECIPE_PATH, id);
    dispatch({ type: 'REMOVE_RECIPE', payload: { id } });
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error });
  }
};

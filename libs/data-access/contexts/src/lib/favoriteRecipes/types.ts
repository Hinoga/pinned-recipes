import { RecipeType } from '@pinned-recipes/spoonacular-client';

export type ActionConstantsType =
  | 'LOAD_RECIPES'
  | 'ERROR'
  | 'REMOVE_RECIPE'
  | 'ADD_RECIPE';

export type ActionType = { type: ActionConstantsType; payload?: any };

export type DispatchType = (action: ActionType) => void;

export type FavoriteRecipeStateType = {
  data: RecipeType[];
  isLoading: boolean;
  error: string;
};

export type FavoriteRecipesProviderPropsType = { children: React.ReactNode };

export type ExternalActionType = (
  dispatch: DispatchType,
  payload?: RecipeType
) => void;

import { ActionType, FavoriteRecipeStateType } from './types';

export const initialState: FavoriteRecipeStateType = {
  data: [],
  error: '',
  isLoading: true,
};

export const favoriteRecipesReducer = (
  state: FavoriteRecipeStateType,
  action: ActionType
) => {
  switch (action.type) {
    case 'LOAD_RECIPES': {
      state.isLoading = false;
      return Object.assign(state, action.payload);
    }
    case 'ERROR': {
      state.isLoading = false;
      state.error = action.payload;
      return state;
    }
    case 'ADD_RECIPE': {
      return state.data.push({ ...action.payload });
    }
    case 'REMOVE_RECIPE': {
      return (state.data = state.data.filter(
        ({ id }) => id !== action.payload.id
      ));
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

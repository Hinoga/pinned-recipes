import React, { createContext, useContext, useEffect } from 'react';
import { fetchFavoriteRecipes } from './externalActions';
import { favoriteRecipesReducer, initialState } from './slice';
import {
  DispatchType,
  FavoriteRecipesProviderPropsType,
  FavoriteRecipeStateType,
} from './types';

export const FavoriteRecipesContext = createContext<
  { state: FavoriteRecipeStateType; dispatch: DispatchType } | undefined
>(undefined);

export const FavoriteRecipesProvider = ({
  children,
}: FavoriteRecipesProviderPropsType) => {
  const [state, dispatch] = React.useReducer(
    favoriteRecipesReducer,
    initialState
  );
  const value = { state, dispatch };

  useEffect(() => {
    fetchFavoriteRecipes(dispatch);
  }, []);

  return (
    <FavoriteRecipesContext.Provider value={value}>
      {children}
    </FavoriteRecipesContext.Provider>
  );
};

export const useFavoriteRecipes = () => {
  const context = useContext(FavoriteRecipesContext);
  if (context === undefined) {
    throw new Error(
      'useFavoriteRecipes must be used within a FavoriteRecipesProvider'
    );
  }
  return context;
};

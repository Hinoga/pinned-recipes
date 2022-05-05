import React, { FC } from 'react';
import { FavoriteRecipesProvider } from './favoriteRecipes/';
import { SpoonacularAPIContextProvider } from './spoonacularRecipes/context';

const GlobalProviders: FC<any> = ({ children }) => (
  <SpoonacularAPIContextProvider>
    <FavoriteRecipesProvider>{children}</FavoriteRecipesProvider>
  </SpoonacularAPIContextProvider>
);

export default GlobalProviders;

import { RecipeType } from '@pinned-recipes/spoonacular-client';
import React, { useState, useEffect, createContext, FC } from 'react';
import { getData } from './externalActions';

const APIContext = createContext<{ recipes: RecipeType[] }>(undefined as never);

export const SpoonacularAPIContextProvider: FC<any> = ({ children }) => {
  const [recipes, setRecipes] = useState<RecipeType[]>([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await getData();
      setRecipes(data.results);
    }
    fetchData();
  }, []);

  return (
    <APIContext.Provider
      value={{
        recipes,
      }}
    >
      {children}
    </APIContext.Provider>
  );
};

export const useSpoonacularAPI = () => {
  const { recipes } = React.useContext(APIContext);
  if (recipes === undefined) {
    throw new Error('Context must be used within a Provider');
  }
  return recipes;
};

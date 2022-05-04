import React, { createContext, useContext } from 'react';

type Action = { type: ''; payload?: any } | { type: 'decrement' };
type Dispatch = (action: Action) => void;
type State = {};
type FavoriteRecipesProviderProps = { children: React.ReactNode };

const FavoriteRecipesContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function favoriteRecipesReducer(state: State, action: Action) {
  switch (action.type) {
    case '': {
      return state;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function FavoriteRecipesProvider({ children }: FavoriteRecipesProviderProps) {
  const [state, dispatch] = React.useReducer(favoriteRecipesReducer, {
    count: 0,
  });
  const value = { state, dispatch };
  return (
    <FavoriteRecipesContext.Provider value={value}>
      {children}
    </FavoriteRecipesContext.Provider>
  );
}

function useFavoriteRecipes() {
  const context = useContext(FavoriteRecipesContext);
  if (context === undefined) {
    throw new Error(
      'useFavoriteRecipes must be used within a FavoriteRecipesProvider'
    );
  }
  return context;
}

const deleteFavoriteRecipe = (dispatch: Dispatch, id: string) => {
  dispatch({ type: '' });
  try {
    //   const updatedUser = await userClient.updateUser(user, updates)
    dispatch({ type: '' });
  } catch (error) {
    dispatch({ type: '' });
  }
};

const addFavoriteRecipe = (dispatch: Dispatch, id: string) => {
  dispatch({ type: '', payload: '' });
  try {
    //   const updatedUser = await userClient.updateUser(user, updates)
    dispatch({ type: '' });
  } catch (error) {
    dispatch({ type: '' });
  }
};

export {
  FavoriteRecipesProvider,
  useFavoriteRecipes,
  deleteFavoriteRecipe,
  addFavoriteRecipe,
};

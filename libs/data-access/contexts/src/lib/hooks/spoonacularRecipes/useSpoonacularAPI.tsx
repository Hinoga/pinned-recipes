import React, {
  useContext,
  useState,
  useEffect,
  createContext,
  FC,
} from 'react';
import { getData } from './resources';

const APIContext = createContext<any>(undefined as never);

export const SpoonacularAPIContextProvider: FC<any> = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

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
  const { recipes } = useContext(APIContext);
  if (recipes === undefined) {
    throw new Error('Context must be used within a Provider');
  }
  return recipes;
};

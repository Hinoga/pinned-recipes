import { RecipesResponse } from '../../types';

export const recipeSuccessRequest: RecipesResponse = {
  offset: 0,
  number: 2,
  totalResults: 86,
  results: [
    {
      id: 716429,
      title: 'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs',
      image: 'https://spoonacular.com/recipeImages/716429-312x231.jpg',
      imageType: 'jpg',
    },
    {
      id: 715538,
      title: 'What to make for dinner tonight?? Bruschetta Style Pork & Pasta',
      image: 'https://spoonacular.com/recipeImages/715538-312x231.jpg',
      imageType: 'jpg',
    },
  ],
};

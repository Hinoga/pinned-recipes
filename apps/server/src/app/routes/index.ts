import { Router } from 'express';
import recipes from './spoonacularRecipes';
import favoriteRecipes from './favoriteRecipes';

const app = Router();

app.use('/spoonacular/recipes', recipes);

app.use('/favorite-recipes', favoriteRecipes);

export default app;

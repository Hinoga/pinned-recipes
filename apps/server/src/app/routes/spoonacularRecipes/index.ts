import { Router } from 'express';
import { getRecipes } from '@pinned-recipes/spoonacular-client';

const app = Router();

app.get('/', async (req, res) => {
  try {
    const response = await getRecipes();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default app;

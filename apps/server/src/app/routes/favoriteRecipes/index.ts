import { Router } from 'express';
import { favoriteRecipeController } from '@pinned-recipes/data-access-client';

const app = Router();

app.get('/', favoriteRecipeController.findAll);

app.post('/', favoriteRecipeController.createOne);

app.delete('/:id', favoriteRecipeController.deleteOne);

export default app;

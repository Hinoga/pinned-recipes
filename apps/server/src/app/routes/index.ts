import { Router } from 'express';
import recipes from './recipes';

const app = Router();

app.use('/recipes', recipes);

export default app;

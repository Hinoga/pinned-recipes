import { Schema, models, model } from 'mongoose';

const favoriteRecipeSchema = new Schema({
  name: {
    type: String,
    unique: false,
    required: true,
  },
  id: {
    type: String,
    unique: false,
    required: false,
  },
  userId: {
    type: String,
    unique: true,
    required: true,
  },
});

export const recipeModel =
  models && models['favoriteRecipes']
    ? models['favoriteRecipes']
    : model('favoriteRecipes', favoriteRecipeSchema);

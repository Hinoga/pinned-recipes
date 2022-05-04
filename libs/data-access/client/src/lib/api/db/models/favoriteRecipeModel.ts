import { Schema, models, model } from 'mongoose';

const favoriteRecipeSchema = new Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  title: {
    type: String,
    unique: false,
    required: true,
  },
  image: {
    type: String,
    unique: false,
    required: true,
  },
  imageType: {
    type: String,
    unique: false,
    required: true,
  },
});

export const recipeModel =
  models && models['favoriteRecipes']
    ? models['favoriteRecipes']
    : model('favoriteRecipes', favoriteRecipeSchema);

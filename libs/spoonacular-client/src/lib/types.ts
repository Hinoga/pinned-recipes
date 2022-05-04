export type RecipeType = {
  id: number;
  title: string;
  image: string;
  imageType: string;
};

export type Pagination = {
  offset: number;
  number: number;
  totalResults: number;
};

export interface RecipesResponse extends Pagination {
  results: RecipeType[];
}

export type GetRecipesType = () => Promise<RecipesResponse>;

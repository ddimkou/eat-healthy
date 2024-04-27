export interface Recipe {
  label: string;
  image: string;
  uri: string;
  calories: number;
  ingredients: Ingredient[];
}

export interface Ingredient {
  text: string;
  weight: number;
}

export interface RecipeApiResponse {
  hits: Array<{ recipe: Recipe }>;
}

export interface NutritionData {
  calories: number;
  totalWeight: number;
  dietLabels: string[];
  healthLabels: string[];
  nutrients: {
    [key: string]: { label: string; quantity: number; unit: string };
  };
}

export interface NutritionRequest {
  ingredients: Ingredient[];
}

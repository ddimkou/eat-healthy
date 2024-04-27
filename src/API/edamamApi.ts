import axios from "axios";

const recipeApi = axios.create({
  baseURL: "https://api.edamam.com/search",
  params: {
    app_id: import.meta.env.VITE_REACT_APP_EDAMAM_RECIPE_APP_ID,
    app_key: import.meta.env.VITE_REACT_APP_EDAMAM_RECIPE_APP_KEY,
  },
});

const nutritionApi = axios.create({
  baseURL: "https://api.edamam.com/api/nutrition-details",
  params: {
    app_id: import.meta.env.VITE_REACT_APP_EDAMAM_NUTRITION_APP_ID,
    app_key: import.meta.env.VITE_REACT_APP_EDAMAM_NUTRITION_APP_KEY,
  },
});

export const fetchRecipes = async (query: string) => {
  try {
    const response = await recipeApi.get("", { params: { q: query } });
    return response.data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};

export const analyzeNutrition = async (recipeData: unknown) => {
  try {
    const response = await nutritionApi.post("", recipeData);
    return response.data;
  } catch (error) {
    console.error("Error analyzing nutrition:", error);
    throw error;
  }
};

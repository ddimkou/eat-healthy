import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipes } from "../API/edamamApi";
import { Recipe } from "../API/types";
import { buttonLabel } from "../shared/constants";

const RecipeDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    if (!id) {
      console.error("Recipe ID is undefined");
      return;
    }

    const fetchRecipeById = async () => {
      try {
        const response = await fetchRecipes(id);
        const foundRecipe = response.hits.find(
          (hit: { recipe: Recipe }) => hit.recipe.uri.split("_").pop() === id
        );
        if (foundRecipe) {
          setRecipe(foundRecipe.recipe);
        } else {
          console.error("Recipe not found");
        }
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };

    fetchRecipeById();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-dune-sand text-sm">
      <div className="w-80 font-bold h-auto p-4 mb-4 border border-forest-green rounded-lg shadow-lg bg-white flex flex-col justify-between hover:bg-ivory-beige">
        <h2 className="text-xl font-bold text-forest-green h-12 flex items-center justify-center text-center">
          {recipe.label}
        </h2>
        <div className="w-48 h-48 mt-4 mx-auto flex items-center justify-center">
          <img
            src={recipe.image}
            alt={recipe.label}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="text-center">
          <p className="mt-4 text-meadow-green">
            Calories: {Math.round(recipe.calories)} kCal
          </p>
          <p className="mt-4 text-meadow-green">
            Weight: {Math.round(recipe.totalWeight)} grams
          </p>
          <p className="mt-4 text-meadow-green">
            Cooking Time: {recipe.totalTime > 0 ? recipe.totalTime : "-"} mins
          </p>

          <div className="bg-zinc-200 my-4 p-4 rounded-lg">
            <p className=" text-green-800">
              Protein:{" "}
              {recipe.totalNutrients.PROCNT
                ? Math.round(recipe.totalNutrients.PROCNT.quantity)
                : "N/A"}{" "}
              {recipe.totalNutrients.PROCNT?.unit}
            </p>
            <p className="mt-4 text-yellow-600">
              Fat:{" "}
              {recipe.totalNutrients.FAT
                ? Math.round(recipe.totalNutrients.FAT.quantity)
                : "N/A"}{" "}
              {recipe.totalNutrients.FAT?.unit}
            </p>
            <p className="mt-4 text-red-900">
              Carbs:{" "}
              {recipe.totalNutrients.CHOCDF
                ? Math.round(recipe.totalNutrients.CHOCDF.quantity)
                : "N/A"}{" "}
              {recipe.totalNutrients.CHOCDF?.unit}
            </p>
          </div>
          <div className="mt-4 text-meadow-green">
            Diet Labels:{" "}
            {recipe.dietLabels.length > 0 ? (
              <div className="flex flex-wrap justify-center">
                {recipe.dietLabels.map((label, index) => (
                  <span key={index} className={`mx-1 ${buttonLabel}`}>
                    {label}
                  </span>
                ))}
              </div>
            ) : (
              "None"
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;

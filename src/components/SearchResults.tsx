import { Link } from "react-router-dom";
import { RecipeApiResponse } from "../API/types";
import { buttonLabel } from "../shared/constants";

interface SearchResultsProps {
  results: RecipeApiResponse | null;
}

const SearchResults = ({ results }: SearchResultsProps) => {
  if (!results) {
    return <div>No results found</div>;
  }

  return (
    <section className="min-h-screen flex justify-center items-center bg-dune-sand text-sm">
      <div className="flex flex-wrap gap-4 p-4 justify-center">
        {results.hits.map((hit, index) => {
          const {
            label,
            image,
            calories,
            totalWeight,
            totalTime,
            dietLabels,
            totalNutrients,
            uri,
          } = hit.recipe;

          const recipeId = uri.split("_").pop(); // Extract the recipe ID from the URI

          return (
            <div
              key={index}
              className="w-80 font-bold h-auto p-4 mb-4 border border-forest-green rounded-lg shadow-lg bg-white flex flex-col justify-between hover:bg-ivory-beige"
            >
              <Link to={`/recipe/${recipeId}`}>
                <div>
                  {/* title */}
                  <h2 className="text-xl font-bold text-forest-green h-12 flex items-center justify-center text-center">
                    {label}
                  </h2>
                  {/* image */}
                  <div className="w-48 h-48 mt-4 mx-auto flex items-center justify-center">
                    <img
                      src={image}
                      alt={label}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  {/* food informations */}
                  <div className="text-center">
                    <p className="mt-4 text-meadow-green">
                      Calories: {Math.round(calories)} kCal
                    </p>
                    <p className="mt-4 text-meadow-green">
                      Weight: {Math.round(totalWeight)} grams
                    </p>
                    <p className="mt-4 text-meadow-green">
                      Cooking Time: {totalTime > 0 ? totalTime : "-"} mins
                    </p>

                    <div className="bg-zinc-200 my-4 p-4 rounded-lg">
                      <p className=" text-green-800">
                        Protein:{" "}
                        {totalNutrients.PROCNT
                          ? Math.round(totalNutrients.PROCNT.quantity)
                          : "N/A"}{" "}
                        {totalNutrients.PROCNT?.unit}
                      </p>
                      <p className="mt-4 text-yellow-600">
                        Fat:{" "}
                        {totalNutrients.FAT
                          ? Math.round(totalNutrients.FAT.quantity)
                          : "N/A"}{" "}
                        {totalNutrients.FAT?.unit}
                      </p>
                      <p className="mt-4 text-red-900">
                        Carbs:{" "}
                        {totalNutrients.CHOCDF
                          ? Math.round(totalNutrients.CHOCDF.quantity)
                          : "N/A"}{" "}
                        {totalNutrients.CHOCDF?.unit}
                      </p>
                    </div>
                    <div className="mt-4 text-meadow-green">
                      Diet Labels:{" "}
                      {dietLabels.length > 0 ? (
                        <div className="flex flex-wrap justify-center">
                          {dietLabels.map((label, index) => (
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
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SearchResults;

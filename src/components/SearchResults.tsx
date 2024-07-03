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
          } = hit.recipe;
          return (
            <div
              key={index}
              className="w-80 h-auto p-4 mb-4 border border-forest-green rounded-lg shadow-lg bg-white flex flex-col justify-between hover:bg-ivory-beige"
            >
              {/* title */}
              <div>
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
                    <b>Calories: </b> {Math.round(calories)} kCal
                  </p>
                  <p className="mt-4 text-meadow-green">
                    <b>Weight:</b> {Math.round(totalWeight)} grams
                  </p>
                  <p className="mt-4 text-meadow-green">
                    <b>Cooking Time:</b> {totalTime > 0 ? totalTime : "-"} mins
                  </p>

                  <p className="mt-4 text-green-800">
                    <b>Protein:</b>{" "}
                    {totalNutrients.PROCNT
                      ? Math.round(totalNutrients.PROCNT.quantity)
                      : "N/A"}{" "}
                    {totalNutrients.PROCNT?.unit}
                  </p>
                  <p className="mt-4 text-yellow-500">
                    <b>Fat:</b>{" "}
                    {totalNutrients.FAT
                      ? Math.round(totalNutrients.FAT.quantity)
                      : "N/A"}{" "}
                    {totalNutrients.FAT?.unit}
                  </p>
                  <p className="mt-4 text-red-900">
                    <b>Carbs:</b>{" "}
                    {totalNutrients.CHOCDF
                      ? Math.round(totalNutrients.CHOCDF.quantity)
                      : "N/A"}{" "}
                    {totalNutrients.CHOCDF?.unit}
                  </p>
                  <p className="mt-4 text-meadow-green">
                    <b>Diet Labels:</b>{" "}
                    {dietLabels.length > 0 ? (
                      <div className="flex flex-wrap justify-center">
                        {dietLabels.map((label, index) => (
                          <p key={index} className={`mx-1 ${buttonLabel}`}>
                            {label}
                          </p>
                        ))}
                      </div>
                    ) : (
                      "None"
                    )}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SearchResults;

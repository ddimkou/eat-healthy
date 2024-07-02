import { RecipeApiResponse } from "../API/types";

interface SearchResultsProps {
  results: RecipeApiResponse | null;
}

const SearchResults = ({ results }: SearchResultsProps) => {
  if (!results) {
    return <div>No results found</div>;
  }

  return (
    <section className="min-h-screen flex justify-center items-center bg-eggshell-white">
      <div className="flex flex-wrap gap-4 p-4 justify-center">
        {results.hits.map((hit, index) => (
          <div
            key={index}
            className="w-80 h-96 p-4 mb-4 border border-forest-green rounded-lg shadow-lg bg-white flex flex-col justify-between hover:bg-ivory-beige"
          >
            <div>
              <h2 className="text-xl font-bold text-forest-green h-12 flex items-center justify-center text-center">
                {hit.recipe.label}
              </h2>
              <div className="w-48 h-48 mt-4 mx-auto flex items-center justify-center">
                <img
                  src={hit.recipe.image}
                  alt={hit.recipe.label}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <p className="mt-4 text-meadow-green">
                Calories: {Math.round(hit.recipe.calories)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SearchResults;

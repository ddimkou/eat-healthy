import { RecipeApiResponse } from "../API/types";

interface SearchResultsProps {
  results: RecipeApiResponse | null;
}

const SearchResults = ({ results }: SearchResultsProps) => {
  if (!results) {
    return <div>No results found</div>;
  }

  return (
    <div className="w-full p-4">
      {results.hits.map((hit, index) => (
        <div key={index} className="p-4 border-b border-gray-300">
          <h2 className="text-xl font-bold">{hit.recipe.label}</h2>
          <img
            src={hit.recipe.image}
            alt={hit.recipe.label}
            className="w-32 h-32"
          />
          <p>Calories: {hit.recipe.calories}</p>
          <ul>
            {hit.recipe.ingredients.map((ingredient, idx) => (
              <li key={idx}>{ingredient.text}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;

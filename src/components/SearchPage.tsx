import { useState } from "react";
import SearchRecipes from "./SearchRecipes";
import SearchResults from "./SearchResults";
import { fetchRecipes } from "../API/edamamApi";
import { RecipeApiResponse } from "../API/types";

const SearchPage = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<RecipeApiResponse | null>(null);

  const handleSearch = async (searchQuery: string) => {
    try {
      const data = await fetchRecipes(searchQuery);
      // console log
      console.log("Response data:", data);
      setResults(data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };
  return (
    <div className="min-h-[90vh] flex flex-col items-center">
      <SearchRecipes
        query={query}
        setQuery={setQuery}
        onSearch={handleSearch}
      />
      <SearchResults results={results} />
    </div>
  );
};

export default SearchPage;

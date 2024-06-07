import { FormEvent } from "react";

interface SearchRecipesProps {
  query: string;
  setQuery: (query: string) => void;
  onSearch: (query: string) => void;
}

const SearchRecipes = ({ query, setQuery, onSearch }: SearchRecipesProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  };
  return (
    <div className="mt-20 w-full flex justify-center p-4 font-semibold bg-meadow-green">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search" className="text-white text-xl">
          Search for recipes by name or ingredient.
        </label>
        <br />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="e.g. chicken"
          required
          className="px-3 py-1.5 m-2 text-black rounded text-sm w-72"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input
          type="submit"
          value="Search"
          className="px-4 py-1.5 m-2 bg-white text-black rounded text-sm font-bold cursor-pointer hover:text-meadow-green"
        />
      </form>
    </div>
  );
};

export default SearchRecipes;

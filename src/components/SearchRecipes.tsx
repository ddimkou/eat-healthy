import { FormEvent } from "react";
const SearchRecipes = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="mt-20 w-full flex justify-center p-4 bg-meadow-green">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search" className="text-white text-xl">
          Search for recipes by name or ingredient
        </label>
        <br />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="e.g. chicken"
          required
          className="px-4 py-1.5 m-2 text-black rounded-full"
        />
        <input
          type="submit"
          value="Search"
          className="px-4 py-1.5 m-2 bg-white text-black rounded-full cursor-pointer"
        />
      </form>
    </div>
  );
};

export default SearchRecipes;

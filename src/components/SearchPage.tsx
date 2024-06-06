import SearchRecipes from "./SearchRecipes";
import SearchResults from "./SearchResults";

const SearchPage = () => {
  return (
    <div className="h-[90vh] flex flex-col items-center  ">
      <SearchRecipes />
      <SearchResults />
    </div>
  );
};

export default SearchPage;

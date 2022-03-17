import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

import classes from "./index.module.scss";
import { useSelector } from "react-redux";
import { selectSearchInput } from "@store/slices/searchSlice";

const Search = () => {
const searchInput = useSelector(selectSearchInput);

  return (
    <div className={classes.search}>
      <SearchInput />
      {searchInput && <SearchResults />}
    </div>
  );
};

export default Search;

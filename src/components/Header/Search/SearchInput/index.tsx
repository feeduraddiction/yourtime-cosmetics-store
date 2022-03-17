import { SearchIcon } from "@assets/svgs/NavIcons";
import {
  activateSearchAction,
  searchInputAction,
  selectSearchActive,
} from "@store/slices/searchSlice";

import { useDispatch, useSelector } from "react-redux";

import classes from "./index.module.scss";

const SearchInput = () => {
  const dispatch = useDispatch();
  const isSearchActive = useSelector(selectSearchActive);
  const closeSearchHandler = () => {
    dispatch(activateSearchAction());
    document.body.classList.remove("scroll-lock");
  };

  const searchHandler = (e:any) => {
      console.log(e.target.value)
    dispatch(searchInputAction(e.target.value));
    e.preventDefault();
  };
  return (
    <div
      className={`${classes["searchInput"]} ${!isSearchActive && classes.hide}`}
    >
      <SearchIcon />
      <input
        type="text"
        placeholder="Search for cosmetics..."
        onChange={searchHandler}
      />
      <button onClick={closeSearchHandler}>
        <span className={classes.close}></span>
      </button>
    </div>
  );
};

export default SearchInput;

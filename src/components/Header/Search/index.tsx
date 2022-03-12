import { SearchIcon } from "@assets/svgs/NavIcons";
import {
  activateSearchAction,
  selectSearchActive,
} from "@store/slices/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import classes from "./index.module.scss";

const Search = () => {
  const dispatch = useDispatch();
  const isSearchActive = useSelector(selectSearchActive);
  const closeSearchHandler = () => {
    dispatch(activateSearchAction());
    document.body.classList.remove("scroll-lock");
  };

  return (
    <div className={`${classes["search"]} ${!isSearchActive && classes.hide}`}>
      <SearchIcon />
      <input type="text" placeholder="Search for cosmetics..." />
      <button onClick={closeSearchHandler}>
        <span className={classes.close}></span>
      </button>
    </div>
  );
};

export default Search;

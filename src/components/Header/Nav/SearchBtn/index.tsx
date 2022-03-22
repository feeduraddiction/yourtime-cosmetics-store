import { SearchIcon } from "@assets/svgs/NavIcons";
import { activateSearchAction } from "@store/slices/searchSlice";
import { useDispatch } from "react-redux";
import classes from "./index.module.scss";

const SearchBtn = () => {
  const dispatch = useDispatch();

  const switchSearchHandler = () => {
    dispatch(activateSearchAction());
    document.body.classList.add('scroll-lock');
  };

  return (
    <li className={`${classes["search"]}`}>
      <SearchIcon onClick={switchSearchHandler} />
    </li>
  );
};

export default SearchBtn;

import {
  activateSearchAction,
  selectSearchInput,
} from "@store/slices/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import classes from "./index.module.scss";
import SearchResult from "./SearchResult";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { pathToCategory } from "src/utils/functions";
import { goodPropTypes } from "src/utils/types/componentsTypes";

const SearchResults = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [fetchedData, setFetchedData] = useState<goodPropTypes[]>([]);
  const searchInput = useSelector(selectSearchInput);

  useEffect(() => {
    fetch(`${window.location.origin}/api/goods`)
      .then((res) => res.json())
      .then((data) => {
        setFetchedData(data);
      });
  }, []);

  const filteredData = fetchedData
    .filter((element) =>
      element.name.toLowerCase().includes(searchInput.toLocaleLowerCase())
    )
    .slice(0, 3);

  return (
    <div className={classes.results}>
      {filteredData.map((item) => (
        <SearchResult
          key={item.id}
          name={item.name}
          brand={item.brand}
          price={item.price}
          onClick={() => {
            router.push(`/catalogue/${pathToCategory(item.type)}/${item.id}`);
            dispatch(activateSearchAction());
            document.body.classList.remove('scroll-lock');
          }}
        />
      ))}
    </div>
  );
};

export default SearchResults;

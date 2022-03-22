import {
  activateSearchAction,
  selectSearchInput,
} from "@store/slices/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import classes from "./index.module.scss";
import SearchResult from "./SearchResult";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { pathToCategory } from "@assets/functions";

export interface goodsPropTypes {
  brand: string;
  id: string;
  name: string;
  price: number;
  image: string;
  type: string;
}

const SearchResults = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [data, setData] = useState<goodsPropTypes[]>([]);
  const searchInput = useSelector(selectSearchInput);

  useEffect(() => {
    fetch("https://yourtime-cosmetics-store.vercel.app/api/goods")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const filteredData = data
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

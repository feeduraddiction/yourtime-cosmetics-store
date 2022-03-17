import { selectSearchInput } from "@store/slices/searchSlice";
import { useSelector } from "react-redux";
import classes from "./index.module.scss";
import SearchResult from "./SearchResult";
import { useState, useEffect } from "react";

export interface goodsPropTypes {
  brand: string;
  id: string;
  name: string;
  price: number;
  image: string;
  type: string;
}

const SearchResults = () => {
  const [data, setData] = useState<goodsPropTypes[]>([]);
  const searchInput = useSelector(selectSearchInput);

  useEffect(() => {
    fetch("api/goods")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      }); 
  }, []);

  console.log(data);

  const filteredData = data
    .filter((element) =>
      element.name.toLowerCase().includes(searchInput.toLocaleLowerCase())
    )
    .slice(0, 3);

  return (
    <div className={classes.results}>
      {filteredData.map((item) => (
        <SearchResult key={item.id} text={item.name} />
      ))}
    </div>
  );
};

export default SearchResults;

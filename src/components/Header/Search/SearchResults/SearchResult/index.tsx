import { pathToCategory } from "@assets/functions";
import { useRouter } from "next/router";
import classes from "./index.module.scss";
import SearchResultContent from "./SearchResultContent";

export interface searchResultPropTypes {
  name: string;
  brand: string;
  price: number;
  onClick?: () => void;

}

const SearchResult = ({ name, brand, price, onClick}: searchResultPropTypes) => {

  const router = useRouter();

  return (
    <div className={classes.result} onClick={onClick}>
      <SearchResultContent name={name} brand={brand} price={price} />
    </div>
  );
};

export default SearchResult;

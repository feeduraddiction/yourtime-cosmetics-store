import { searchResultPropTypes } from "..";
import classes from "./index.module.scss";

const SearchResultContent = ({ name, brand, price }: searchResultPropTypes) => {


  return (
    <div className={classes.content} >
      <div className={classes.text}>
        <p>{brand}</p>
        <h5>{name}</h5>
      </div>
      <p className={classes.price}>${price}</p>
    </div>
  );
};

export default SearchResultContent;

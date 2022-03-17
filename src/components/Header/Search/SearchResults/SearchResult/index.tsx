import classes from "./index.module.scss";

const SearchResult = ({text} : {text: string}) => {
  return (
    <div className={classes.result}>
      <p>{text}</p>
    </div>
  );
};

export default SearchResult;

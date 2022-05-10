import classes from "./index.module.scss";

const GoodDescriptionContentText = ({
  name,
  description,
  brand,
}: {
  name: string;
  description: string;
  brand: string;
}) => {
  return (
    <div className={classes.text}>
      <h4>{brand}</h4>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default GoodDescriptionContentText;

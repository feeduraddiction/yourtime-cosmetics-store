import CardLeftSide from "./CardLeftSide";
import classes from '../index.module.scss';
export interface cardTextPropTypes {
  name: string;
  price: number;
  brand: string;
}

const CardText = ({name, price, brand}: cardTextPropTypes) => {
  return (
    <div className={classes.cardText}>
      <CardLeftSide brand={brand} name={name} />
      <p>{price}$</p>
    </div>
  );
};

export default CardText;

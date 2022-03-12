import CardLeftSide from "./CardLeftSide";
import classes from '../index.module.scss';

const CardText = () => {
  return (
    <div className={classes.cardText}>
      <CardLeftSide />
      <p>Price $</p>
    </div>
  );
};

export default CardText;

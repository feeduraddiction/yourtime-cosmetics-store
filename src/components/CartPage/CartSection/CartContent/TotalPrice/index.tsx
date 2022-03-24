import Button from "@components/UI/Button";
import classes from "./index.module.scss";

const TotalPrice = ({ totalPrice }: { totalPrice: number }) => {
  return (
    <div className={classes.totalPrice}>
      <h2>Total: $ {totalPrice}</h2>
      <Button>Proceed to checkout</Button>
    </div>
  );
};

export default TotalPrice;

import Button from "@components/UI/Button";
import { useDispatch } from "react-redux";
import classes from "./index.module.scss";

const TotalPrice = ({ totalPrice }: { totalPrice: number | never[] }) => {
  const dispatch = useDispatch();
  const proceedHandler = () => {
  };
  return (
    <div className={classes.totalPrice}>
      <h2>Total: $ {totalPrice}</h2>
      <Button onClick={proceedHandler}>Proceed to checkout</Button>
    </div>
  );
};

export default TotalPrice;

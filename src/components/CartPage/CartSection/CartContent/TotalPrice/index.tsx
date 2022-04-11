import Button from "@components/UI/Button";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import classes from "./index.module.scss";

const TotalPrice = ({ totalPrice }: { totalPrice: number | never[] }) => {
  const router = useRouter();
  const proceedHandler = () => {
    router.push('/order');
  };
  return (
    <div className={classes.totalPrice}>
      <h2>Total: $ {totalPrice}</h2>
      <Button onClick={proceedHandler}>Proceed to checkout</Button>
    </div>
  );
};

export default TotalPrice;

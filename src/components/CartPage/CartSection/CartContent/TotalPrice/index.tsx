import Button from "@components/UI/Button";
import { activateLoginWindowAction } from "@store/slices/loginWindowSlice";
import { selectUser } from "@store/slices/userSlice";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import classes from "./index.module.scss";

const TotalPrice = ({ totalPrice }: { totalPrice: number | never[] }) => {
  const router = useRouter();
  const currentUser = useSelector(selectUser);
  const proceedHandler = () => {
    if (currentUser.username) {
      router.push("/order");
    } else {
      router.push("/signup");
    }
  };
  return (
    <div className={classes.totalPrice}>
      <h2>Total: $ {totalPrice}</h2>
      <Button onClick={proceedHandler}>Proceed to checkout</Button>
    </div>
  );
};

export default TotalPrice;

import { CartIcon } from "@assets/svgs/NavIcons";
import { selectCart } from "@store/slices/cartSlice";
import { useSelector } from "react-redux";
import classes from "../../index.module.scss";

const CartBtn = () => {
  const cart = useSelector(selectCart);
  const totalQuantity = cart.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);

  return (
    <li>
      <div className={classes.cart}>
        <CartIcon />
        <div className={classes.cartCounter}>
          <p>{totalQuantity}</p>
        </div>
      </div>
    </li>
  );
};

export default CartBtn;

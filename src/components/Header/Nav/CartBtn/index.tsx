import { CartIcon } from "@assets/svgs/NavIcons";
import { selectCart } from "@store/slices/cartSlice";
import { useSelector } from "react-redux";
import classes from "../../index.module.scss";

const CartBtn = () => {

  const cart = useSelector(selectCart);

  return (
    <li>
      <div className={classes.cart}>
        <CartIcon />
        <div className={classes.cartCounter}>
          <p>{cart.length}</p>
        </div>
      </div>
    </li>
  );
};

export default CartBtn;

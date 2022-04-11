import { CartIcon } from "@assets/svgs/NavIcons";
import { selectCart } from "@store/slices/cartSlice";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import classes from "../../index.module.scss";

const CartBtn = () => {
  const router = useRouter();
  const localCart = useSelector(selectCart);
  const totalQuantity = localCart.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);

  return (
    <li>
      <div className={classes.cart}>
        <CartIcon onClick={() => router.push("/cart")} />
        <div className={classes.cartCounter}>
          <p>{totalQuantity}</p>
        </div>
      </div>
    </li>
  );
};

export default CartBtn;

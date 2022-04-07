import CartItem from "./CartItem";
import classes from "./index.module.scss";
import TotalPrice from "./TotalPrice";
import { cartGoodsPropTypes } from "@assets/types";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectUser } from "@store/slices/userSlice";

const CartContent = ({ cartGoods }: cartGoodsPropTypes) => {
  const router = useRouter();
  const user = useSelector(selectUser);

  const totalPrice = !user.isAdmin
    ? cartGoods.reduce((acc, curr) => {
        return curr.price * curr.quantity + acc;
      }, 0)
    : 0;

  return (
    <div
      className={`${classes["content"]} ${!cartGoods.length && classes.empty}`}
    >
      <div className={classes.back}>
        <button
          onClick={() => router.push("/catalogue")}
          className={classes.backBtn}
        >
          &#8592; Back to shopping
        </button>
      </div>
      <h2>{cartGoods.length ? "Shopping cart" : "Cart is empty"}</h2>
      {cartGoods.map((good) => (
        <CartItem key={good.id} cartGood={good} />
      ))}
      {cartGoods.length ? <TotalPrice totalPrice={totalPrice} /> : ""}
    </div>
  );
};

export default CartContent;

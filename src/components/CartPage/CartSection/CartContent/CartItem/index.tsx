import { cartGoodPropTypes } from "@assets/types";
import { removeFromCartAction } from "@store/slices/cartSlice";
import { useDispatch } from "react-redux";
import CartItemContent from "./CartItemContent";
import classes from "./index.module.scss";

const CartItem = ({ cartGood }: cartGoodPropTypes) => {
  const dispatch = useDispatch();
  const deleteItemHandler = () => {
    dispatch(removeFromCartAction(cartGood.id));
  };
  return (
    <div className={classes.item}>
      <CartItemContent cartGood={cartGood} />
      <button className={classes.closeButton} onClick={deleteItemHandler}>
        <span className={classes.close}></span>
      </button>
    </div>
  );
};

export default CartItem;

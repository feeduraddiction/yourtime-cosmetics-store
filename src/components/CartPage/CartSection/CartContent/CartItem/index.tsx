import { removeGood } from "@assets/functions";
import { cartGoodPropTypes } from "@assets/types";
import { removeFromCartAction } from "@store/slices/cartSlice";
import { selectUser } from "@store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import CartItemContent from "./CartItemContent";
import classes from "./index.module.scss";

const CartItem = ({ cartGood }: cartGoodPropTypes) => {
  const currentUser = useSelector(selectUser);
  const dispatch = useDispatch();
  const deleteItemHandler = async () => {
    dispatch(removeFromCartAction(cartGood.id));
    const res = await removeGood(currentUser.username, cartGood.id);
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

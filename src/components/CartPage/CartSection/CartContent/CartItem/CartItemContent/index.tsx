/* eslint-disable @next/next/no-img-element */
import CardLeftSide from "@components/UI/Card/CardText/CardLeftSide";
import Counter from "@components/UI/Counter";
import { cartGoodPropTypes } from "src/utils/types/componentsTypes";

import classes from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { incrementCart, decrementCart } from "@store/slices/cartSlice";
import { selectUser } from "@store/slices/userSlice";
import { updateCart } from "@utils/http";

const CartItemContent = ({ cartGood }: cartGoodPropTypes) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  const decrementHandler = async () => {
    dispatch(decrementCart(cartGood.id));
    if (cartGood.quantity !== 1) {
      const res = await updateCart(currentUser.username, -1, cartGood.id);
    }
  };
  const incrementHandler = async () => {
    dispatch(incrementCart(cartGood.id));
    if (cartGood.quantity !== 1) {
      const res = await updateCart(currentUser.username, 1, cartGood.id);
    }
  };
  return (
    <div className={classes.content}>
      <div className={classes.image}>
        <img src={cartGood?.image} alt="img" />
      </div>
      <div className={classes.text}>
        <CardLeftSide brand={cartGood.brand} name={cartGood?.name} />
      </div>
      <div className={classes.counter}>
        <Counter
          onDecrement={decrementHandler}
          onIncrement={incrementHandler}
          counter={cartGood.quantity}
        />
      </div>
      <div className={classes.price}>
        <h4>${cartGood.price * cartGood.quantity}</h4>
      </div>
    </div>
  );
};

export default CartItemContent;

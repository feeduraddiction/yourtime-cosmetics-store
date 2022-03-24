/* eslint-disable @next/next/no-img-element */
import CardLeftSide from "@components/UI/Card/CardText/CardLeftSide";
import Counter from "@components/UI/Counter";
import { cartGoodPropTypes } from "@assets/types";

import classes from "./index.module.scss";
import { useDispatch } from "react-redux";
import { incrementCart, decrementCart } from "@store/slices/cartSlice";

const CartItemContent = ({ cartGood }: cartGoodPropTypes) => {
  const dispatch = useDispatch();
  const decrementHandler = () => {
    dispatch(decrementCart(cartGood.id));
  };
  const incrementHandler = () => {
    dispatch(incrementCart(cartGood.id));
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

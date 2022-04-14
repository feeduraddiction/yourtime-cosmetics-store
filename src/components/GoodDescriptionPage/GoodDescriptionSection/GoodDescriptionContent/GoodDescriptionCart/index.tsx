import { insertGoodCart } from "@assets/functions";
import { goodDataPropTypes } from "@assets/types";
import Button from "@components/UI/Button";
import Counter from "@components/UI/Counter";
import { addToCartAction } from "@store/slices/cartSlice";
import { selectUser } from "@store/slices/userSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "./index.module.scss";

const GoodDescriptionCart = ({ goodData }: goodDataPropTypes) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  const [counter, setCounter] = useState(1);

  const decrementHandler = () => {
    counter > 1 ? setCounter(counter - 1) : setCounter(1);
  };

  const incrementHandler = () => {
    setCounter(counter + 1);
  };

  const cartGood = {
    ...goodData,
    quantity: counter,
  };

  const addToCartHandler = async () => {
    dispatch(addToCartAction(cartGood));
    const res = await insertGoodCart(currentUser.username, counter, cartGood);
  };

  return (
    <div className={classes.cart}>
      <div className={classes.total}>
        <div className={classes.counter}>
          <p>Quantity:</p>
          <Counter
            onDecrement={decrementHandler}
            onIncrement={incrementHandler}
            counter={counter}
          />
        </div>
        <h3>Price: ${counter * goodData.price}</h3>
      </div>
      <Button onClick={addToCartHandler}>Add to cart</Button>
    </div>
  );
};

export default GoodDescriptionCart;

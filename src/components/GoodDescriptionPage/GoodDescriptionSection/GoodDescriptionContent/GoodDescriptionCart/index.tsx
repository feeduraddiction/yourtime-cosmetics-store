import Button from "@components/UI/Button";
import Counter from "@components/UI/Counter";
import { useState } from "react";

import classes from "./index.module.scss";

const GoodDescriptionCart = ({ price }: { price: number }) => {
  const [counter, setCounter] = useState(1);

  const decrementHandler = () => {
    counter > 1 ? setCounter(counter - 1) : setCounter(1);
  };

  const incrementHandler = () => {
    setCounter(counter + 1)
  }

  

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
        <h3>Price: ${counter * price}</h3>
      </div>
      <Button>Add to cart</Button>
    </div>
  );
};

export default GoodDescriptionCart;

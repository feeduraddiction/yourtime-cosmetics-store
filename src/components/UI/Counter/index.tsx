import { useState } from "react";
import Button from "../Button";
import classes from "./index.module.scss";

const Counter = ({
  onIncrement,
  onDecrement,
  counter,
}: {
  onIncrement: (e: React.MouseEvent) => void;
  onDecrement: (e: React.MouseEvent) => void;
  counter: number;
}) => {

  return (
    <div className={classes.counter}>
      <Button onClick={onDecrement}>-</Button>
      {("000" + counter).slice(-3)}
      <Button onClick={onIncrement}>+</Button>
    </div>
  );
};

export default Counter;

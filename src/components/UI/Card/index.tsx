/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Button from "@UI/Button";
import Backdrop from "./Backdrop";
import CardText from "./CardText";

import classes from "./index.module.scss";
import { useRouter } from "next/router";
import { pathToCategory } from "@assets/functions";
import { goodPropTypes } from "@assets/types";
import { useDispatch } from "react-redux";
import { AddToCartAction } from "@store/slices/cartSlice";

export interface goodCardPropTypes {
  key?: string;
  good: goodPropTypes;
}

const Card = ({ good }: goodCardPropTypes) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartGood = {
    ...good,
    quantity: 1,
  };

  const addToCartHandler = async () => {
    dispatch(AddToCartAction(cartGood));
  };

  return (
    <div
      className={classes.card}
      onClick={() =>
        router.push(`/catalogue/${pathToCategory(good.type)}/${good.id}`)
      }
    >
      <img src={good.image} alt="card" width="200px" height="200px" />
      <CardText name={good.name} brand={good.brand} price={good.price} />
      <Button onClick={addToCartHandler}>Add to card</Button>
      <Backdrop />
    </div>
  );
};

export default Card;

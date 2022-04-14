/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Button from "@UI/Button";
import Backdrop from "./Backdrop";
import CardText from "./CardText";

import classes from "./index.module.scss";
import { useRouter } from "next/router";
import { insertGoodCart, pathToCategory } from "@assets/functions";
import { goodPropTypes } from "@assets/types";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction, selectCart } from "@store/slices/cartSlice";
import { selectUser } from "@store/slices/userSlice";

export interface goodCardPropTypes {
  key?: string;
  good: goodPropTypes;
}

const Card = ({ good }: goodCardPropTypes) => {
  const currentUser = useSelector(selectUser);
  const router = useRouter();
  const dispatch = useDispatch();
  const cartGood = {
    ...good,
    quantity: 1,
  };
  const cart = useSelector(selectCart);
  const addToCartHandler = async () => {
    dispatch(addToCartAction(cartGood));
    const res = await insertGoodCart(currentUser.username, 1, cartGood);
  };

  return (
    <div className={classes.card}>
      <img src={good.image} alt="card" width="200px" height="200px" />
      <CardText name={good.name} brand={good.brand} price={good.price} />
      <Button onClick={addToCartHandler}>Add to card</Button>
      <Backdrop
        onClick={() =>
          router.push(`/catalogue/${pathToCategory(good.type)}/${good.id}`)
        }
      />
    </div>
  );
};

export default Card;

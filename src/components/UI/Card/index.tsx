/* eslint-disable @next/next/no-img-element */
import Button from "@UI/Button";
import Backdrop from "./Backdrop";
import CardText from "./CardText";

import classes from "./index.module.scss";
import { useRouter } from "next/router";
import { insertGoodCart } from "@utils/http";
import { pathToCategory } from "@utils/functions";
import { goodCardPropTypes } from "src/utils/types/componentsTypes";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction, selectCart } from "@store/slices/cartSlice";
import { selectUser } from "@store/slices/userSlice";

const Card = ({ good }: goodCardPropTypes) => {
  const currentUser = useSelector(selectUser);
  const router = useRouter();
  const dispatch = useDispatch();
  const cartGood = {
    ...good,
    quantity: 1,
  };
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

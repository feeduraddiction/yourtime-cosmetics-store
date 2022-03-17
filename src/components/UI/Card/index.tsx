/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Button from "@UI/Button";
import Backdrop from "./Backdrop";
import CardText from "./CardText";

import classes from "./index.module.scss";
import { useRouter } from "next/router";
import { pathToCategory } from "@assets/functions";

export interface goodPropTypes {
  key?: string;
  good: {
    id: string;
    name: string;
    brand: string;
    image: string;
    price: number;
    type: string;
  };
}

const Card = ({ good }: goodPropTypes) => {
  const router = useRouter();
  return (
    <div
      className={classes.card}
      onClick={() =>
        router.push(`/catalogue/${pathToCategory(good.type)}/${good.id}`)
      }
    >
      <img src={good.image} alt="card" width="200px" height="200px" />
      <CardText name={good.name} brand={good.brand} price={good.price} />
      <Button>Add to card</Button>
      <Backdrop />
    </div>
  );
};

export default Card;

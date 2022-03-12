import Image from "next/image";
import Button from "@UI/Button";
import Backdrop from "./Backdrop";
import CardText from "./CardText";

import classes from "./index.module.scss";

const Card = () => {
  return (
    <div className={classes.card}>
      <Image src={require("@assets/img/image.png")} alt="card" />
      <CardText />
      <Button>Add to card</Button>
      <Backdrop />
    </div>
  );
};

export default Card;

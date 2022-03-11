import Image from "next/image";

import classes from './index.module.scss'

const Card = () => {
  return (
    <div className={classes.card}>
      <Image src={require("@assets/image.png")} alt="card" />
      <p>Brand</p>
      <h5>Name</h5>
      <p>28 $</p>
    </div>
  );
};

export default Card;

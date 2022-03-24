import CartContent from "./CartContent";
import { cartGoodsPropTypes } from "@assets/types";
import classes from "./index.module.scss";

const CartSection = ({ cartGoods }: cartGoodsPropTypes) => {
  return (
    <section className={classes.section}>
      <CartContent cartGoods={cartGoods} />
    </section>
  );
};

export default CartSection;

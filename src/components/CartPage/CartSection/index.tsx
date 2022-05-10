import CartContent from "./CartContent";
import { cartGoodsPropTypes } from "src/utils/types/componentsTypes";
import classes from "./index.module.scss";

const CartSection = ({ cartGoods }: cartGoodsPropTypes) => {
  return (
    <section className={classes.section}>
      <CartContent cartGoods={cartGoods} />
    </section>
  );
};

export default CartSection;

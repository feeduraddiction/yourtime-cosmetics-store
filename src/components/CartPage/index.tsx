import { cartGoodsPropTypes } from "@assets/types";
import CartSection from "./CartSection";

const CartPage = ({cartGoods}:cartGoodsPropTypes) => {
  return (
    <main>
      <CartSection cartGoods={cartGoods} />
    </main>
  );
};

export default CartPage;

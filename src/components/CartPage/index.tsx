import { cartGoodsPropTypes } from "src/utils/types/componentsTypes";
import CartSection from "./CartSection";

const CartPage = ({cartGoods}:cartGoodsPropTypes) => {
  return (
    <main>
      <CartSection cartGoods={cartGoods} />
    </main>
  );
};

export default CartPage;

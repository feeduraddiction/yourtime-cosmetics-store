import CartPage from "@components/CartPage";
import { selectCart } from "@store/slices/cartSlice";
import { NextPage } from "next";
import { useSelector } from "react-redux";

const Cart: NextPage = () => {
  const cartGoods = useSelector(selectCart);
  return <CartPage cartGoods={cartGoods} />;
};

export default Cart;

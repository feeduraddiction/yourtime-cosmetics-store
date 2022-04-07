import CartPage from "@components/CartPage";
import { selectCart } from "@store/slices/cartSlice";
import { selectUser } from "@store/slices/userSlice";
import { NextPage } from "next";
import { useSelector } from "react-redux";

const Cart: NextPage = () => {
  const localCartGoods = useSelector(selectCart);
  return <CartPage cartGoods={localCartGoods} />;
};

export default Cart;

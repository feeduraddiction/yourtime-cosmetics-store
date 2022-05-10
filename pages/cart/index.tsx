import CartPage from "@components/CartPage";
import { selectCart } from "@store/slices/cartSlice";
import { NextPage } from "next";
import { useSelector } from "react-redux";
import Head from "next/head";

const Cart: NextPage = () => {
  const localCartGoods = useSelector(selectCart);
  return (
    <>
      <Head>
        <title>YOURtime - Cart</title>
        <meta name="YOURtime - cart" content="Cart of yourtime store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CartPage cartGoods={localCartGoods} />;
    </>
  );
};

export default Cart;

import OrderPage from "@components/OrderPage";
import { NextPage } from "next";
import Head from "next/head";

const Order: NextPage = () => {
  return (
    <>
      <Head>
        <title>Order</title>
        <meta name="YOURtime" content="Main page of store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <OrderPage />;
    </>
  );
};

export default Order;

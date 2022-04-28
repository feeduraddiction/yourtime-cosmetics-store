import OrdersListPage from "@components/OrdersListPage";
import { NextPage } from "next";
import Head from "next/head";

const Orders: NextPage = () => {
  return (
    <>
      <Head>
        <title>Your orders</title>
        <meta name="Your orders" content="Orders that you've made recently" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <OrdersListPage />
    </>
  );
};

export default Orders;

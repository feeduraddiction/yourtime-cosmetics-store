import type { NextPage } from "next";
import { MongoClient } from "mongodb";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import MainPage from "@components/MainPage";
import { goodsPropTypes } from "src/utils/types/componentsTypes";


const Home: NextPage<goodsPropTypes> = ({ goods }) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>YOURtime - cosmetics store</title>
        <meta name="YOURtime" content="Main page of store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainPage goods={goods} />
    </div>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://feeduraddiction:Vjq1Gfhjkm2qwerty@cluster0.8swm7.mongodb.net/yourtime-cosmetics?retryWrites=true&w=majority"
  );
  const db = client.db();

  const goodsCollection = db.collection("yourtime");

  const goods = await goodsCollection.find().toArray();

  client.close();

  return {
    props: {
      goods: goods.map((good) => {
        return {
          brand: good.brand,
          name: good.name,
          id: good._id.toString(),
          image: good.image,
          price: good.price,
          type: good.type,
        };
      }),
    },
  };
}

export default Home;

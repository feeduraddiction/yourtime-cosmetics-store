import CataloguePage from "@components/CataloguePage";
import Head from "next/head";
import { NextPage } from "next";
import { MongoClient } from "mongodb";
import { goodsPropTypes } from "src/utils/types/componentsTypes";

const Catalogue: NextPage<goodsPropTypes> = ({ goods }) => {
  return (
    <>
      <Head>
        <title>Catalogue</title>
        <meta name="YOURtime catalogue" content="Catalogue of YOURtime store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CataloguePage goods={goods} />
    </>
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

export default Catalogue;

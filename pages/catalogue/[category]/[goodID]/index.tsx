import GoodDescriptionPage from "@components/GoodDescriptionPage";
import { NextPage } from "next";
import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import { goodDescriptionPropTypes } from "@utils/types/componentsTypes";
import { useRouter } from "next/router";
import { upperCaseOfCategory } from "@utils/functions";

const GoodDescription: NextPage<goodDescriptionPropTypes> = ({
  goodData,
  goods,
}) => {
  const router = useRouter();
  const IDToFind = upperCaseOfCategory(router.query.goodID?.toString());
  const indexToFind = goods.findIndex((good) => good.id === IDToFind);
  const headTitle = goods[indexToFind].name + " | " + goods[indexToFind].brand;
  const headDescription = goods[indexToFind].description;
  return (
    <>
      <Head>
        <title>{headTitle}</title>
        <meta name={headTitle} content={headDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GoodDescriptionPage goodData={goodData} goods={goods} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://feeduraddiction:Vjq1Gfhjkm2qwerty@cluster0.8swm7.mongodb.net/yourtime-cosmetics?retryWrites=true&w=majority"
  );
  const db = client.db();

  const goodsCollection = db.collection("yourtime");

  const goods = await goodsCollection
    .find({}, { projection: { _id: 1, type: 1 } })
    .toArray();
  client.close();

  return {
    fallback: "blocking",
    paths: goods.map((good) => ({
      params: {
        category: good.type,
        goodID: good._id.toString(),
      },
    })),
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  interface IDparams extends ParsedUrlQuery {
    goodID: string;
  }
  const { goodID } = context.params as IDparams;

  const client = await MongoClient.connect(
    "mongodb+srv://feeduraddiction:Vjq1Gfhjkm2qwerty@cluster0.8swm7.mongodb.net/yourtime-cosmetics?retryWrites=true&w=majority"
  );

  const db = client.db();

  const goodsCollection = db.collection("yourtime");

  const selectedGood = await goodsCollection.findOne({
    _id: new ObjectId(goodID),
  });

  const recommendedGoods = await goodsCollection.find().toArray();

  client.close();

  return {
    props: {
      goodData: {
        id: selectedGood?._id.toString(),
        name: selectedGood?.name,
        brand: selectedGood?.brand,
        image: selectedGood?.image,
        price: selectedGood?.price,
        description: selectedGood?.description,
        type: selectedGood?.type,
      },
      goods: recommendedGoods.map((good) => ({
        id: good._id.toString(),
        name: good.name,
        brand: good.brand,
        image: good.image,
        price: good.price,
        description: good.description,
        type: good.type,
      })),
    },
  };
};
export default GoodDescription;

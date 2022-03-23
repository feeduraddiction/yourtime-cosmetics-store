import GoodDescriptionPage from "@components/GoodDescriptionPage";
import { NextPage } from "next";
import { MongoClient, ObjectId } from "mongodb";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import { goodPropTypes } from "@assets/types";

export interface goodDescriptionPropTypes {
  goodData: goodPropTypes;
  goods: goodPropTypes[];
}

const GoodDescription: NextPage<goodDescriptionPropTypes> = ({
  goodData,
  goods,
}) => {
  return <GoodDescriptionPage goodData={goodData} goods={goods} />;
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

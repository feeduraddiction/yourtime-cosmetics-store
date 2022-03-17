import GoodDescriptionPage from "@components/GoodDescriptionPage";
import { NextPage } from "next";
import { MongoClient, ObjectId } from "mongodb";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";

export interface goodDataPropTypes {
  goodData: {
    id: string;
    name: string;
    brand: string;
    price: number;
    description: string;
    image: string;
    type: string;
  };
}

const GoodDescription: NextPage<goodDataPropTypes> = ({ goodData }) => {
  return <GoodDescriptionPage goodData={goodData} />;
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
  console.log(goodID);

  const client = await MongoClient.connect(
    "mongodb+srv://feeduraddiction:Vjq1Gfhjkm2qwerty@cluster0.8swm7.mongodb.net/yourtime-cosmetics?retryWrites=true&w=majority"
  );

  const db = client.db();

  const goodsCollection = db.collection("yourtime");

  const selectedGood = await goodsCollection.findOne({
    _id: new ObjectId(goodID),
  });

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
    },
  };
};
export default GoodDescription;

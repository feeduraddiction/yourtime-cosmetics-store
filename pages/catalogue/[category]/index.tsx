import CategoryPage from "@components/CategoryPage";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MongoClient } from "mongodb";
import { ParsedUrlQuery } from "querystring";
import { goodsPropTypes } from "@assets/types";

const Category: NextPage<goodsPropTypes> = ({ goods }) => {
  return (
    <div>
      <CategoryPage goods={goods} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pathsArray: string[] = ["forhair", "forbody", "forface", "forhand"];

  const paths = pathsArray.map((category) => {
    return {
      params: { category },
    };
  });

  return {
    fallback: "blocking",
    paths,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  interface IDparams extends ParsedUrlQuery {
    category: string;
  }
  const { category } = context.params as IDparams;

  const client = await MongoClient.connect(
    "mongodb+srv://feeduraddiction:Vjq1Gfhjkm2qwerty@cluster0.8swm7.mongodb.net/yourtime-cosmetics?retryWrites=true&w=majority"
  );

  const db = client.db();

  const goodsCollection = db.collection("yourtime");

  const selectedCategory = await goodsCollection
    .find({
      type: category.replace("for", "For "),
    })
    .toArray();

  console.log(selectedCategory + "selected");

  client.close();

  return {
    props: {
      goods: selectedCategory.map((category) => {
        return {
          brand: category.brand,
          name: category.name,
          id: category._id.toString(),
          image: category.image,
          price: category.price,
          type: category.type,
        };
      }),
    },
  };
};

export default Category;

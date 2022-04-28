import CategoryPage from "@components/CategoryPage";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { MongoClient } from "mongodb";
import { ParsedUrlQuery } from "querystring";
import { goodsPropTypes } from "src/utils/types/componentsTypes";
import { useRouter } from "next/router";
import { upperCaseOfCategory } from "@utils/functions";

const Category: NextPage<goodsPropTypes> = ({ goods }) => {
  const router = useRouter();
  const headTitle = upperCaseOfCategory(router.query.category?.toString());

  return (
    <>
      <Head>
        <title>{headTitle}</title>
        <meta name="YOURtime" content="Main page of store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CategoryPage goods={goods} />
    </>
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

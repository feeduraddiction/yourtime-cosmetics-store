import CategoryPage from "@components/CategoryPage";
import { GetStaticPaths, GetStaticProps } from "next";
import { MongoClient } from "mongodb";
import { ParsedUrlQuery } from "querystring";
export interface categoryDataPropTypes {
  categoryData: {
    brand: string;
    id: string;
    name: string;
    price: number;
    image: string;
    type: string;
  }[]
}

const Category = ({categoryData}:categoryDataPropTypes) => {
  return (
    <div>
      <CategoryPage categoryData={categoryData} />
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
    fallback: false,
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
      categoryData: selectedCategory.map((category) => {
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

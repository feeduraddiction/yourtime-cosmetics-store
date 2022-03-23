import { goodsPropsTypes } from "pages";
import Goods from "@components/MainPage/TrendingSection/Goods";

const CategoryProducts = ({ goods }: goodsPropsTypes) => {
  return (
    <section>
      <Goods goods={goods} />
    </section>
  );
};

export default CategoryProducts;

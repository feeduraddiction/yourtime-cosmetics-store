import { goodsPropTypes } from "src/utils/types/componentsTypes";
import Goods from "@components/MainPage/TrendingSection/Goods";

const CategoryProducts = ({ goods }: goodsPropTypes) => {
  return (
    <section>
      <Goods goods={goods} />
    </section>
  );
};

export default CategoryProducts;

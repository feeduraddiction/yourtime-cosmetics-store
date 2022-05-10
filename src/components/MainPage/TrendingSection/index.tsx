import Card from "@components/UI/Card";
import classes from "./index.module.scss";
import Goods from "./Goods";
import { goodsPropTypes } from "src/utils/types/componentsTypes";

const TrendingSection = ({ goods }: goodsPropTypes) => {
  const trendingGoods = goods.slice(1, 5);
  return (
    <section className={classes.trendingSection}>
      <h3>Trending Products</h3>
      <Goods goods={trendingGoods} />
    </section>
  );
};

export default TrendingSection;

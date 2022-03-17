import Card from "@components/UI/Card";
import { goodsPropTypes } from "..";
import classes from "./index.module.scss";
import Goods from "./Products";

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

import Card from "@components/UI/Card";
import { goodsPropTypes } from "..";
import classes from "./index.module.scss";

const TrendingSection = ({goods}: goodsPropTypes) => {
const trendingGoods = goods.slice(1,5);
  return (
    <section className={classes.trendingSection}>
      <h3>Trending Products</h3>
      <div className={classes.trendingProducts}>
      {trendingGoods.map(good => (
        <Card key={good.id} good={good}/>
      ))}
      </div>
    </section>
  );
};

export default TrendingSection;

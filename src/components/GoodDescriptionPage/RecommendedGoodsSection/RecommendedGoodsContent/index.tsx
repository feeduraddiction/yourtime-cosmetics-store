/* eslint-disable @next/next/no-img-element */
import { goodsPropTypes } from "src/utils/types/componentsTypes";
import Goods from "@components/MainPage/TrendingSection/Goods";
import classes from "./index.module.scss";

const RecommendedGoodsContent = ({ goods }: goodsPropTypes) => {
  const recommendedGoods = goods
    .sort(() => Math.random() - Math.random())
    .slice(0, 4);
  return (
    <div className={classes.content}>
      <h2>Recommended For You</h2>
      <Goods goods={recommendedGoods} />
    </div>
  );
};

export default RecommendedGoodsContent;

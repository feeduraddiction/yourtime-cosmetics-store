import { goodsPropTypes } from "src/utils/types/componentsTypes";
import RecommendedGoodsContent from "./RecommendedGoodsContent";

const RecommendedGoodsSection = ({ goods }: goodsPropTypes) => {
  return (
    <section>
      <RecommendedGoodsContent goods={goods} />
    </section>
  );
};

export default RecommendedGoodsSection;

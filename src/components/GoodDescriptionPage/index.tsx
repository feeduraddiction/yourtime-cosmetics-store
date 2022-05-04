import { goodDescriptionPropTypes } from "@utils/types/componentsTypes";
import GoodDescriptionSection from "./GoodDescriptionSection";
import RecommendedGoodsSection from "./RecommendedGoodsSection";

const GoodDescriptionPage = ({
  goodData,
  goods,
}: goodDescriptionPropTypes) => {
  return (
    <main>
      <GoodDescriptionSection goodData={goodData} />
      <RecommendedGoodsSection goods={goods} />
    </main>
  );
};

export default GoodDescriptionPage;

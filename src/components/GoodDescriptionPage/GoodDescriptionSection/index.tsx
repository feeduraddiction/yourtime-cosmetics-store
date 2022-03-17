import { goodDataPropTypes } from "pages/catalogue/[category]/[goodID]";
import GoodDescriptionContent from "./GoodDescriptionContent";

const GoodDescriptionSection = ({goodData}:goodDataPropTypes) => {
  return (
    <section>
      <GoodDescriptionContent goodData={goodData} />
    </section>
  );
};

export default GoodDescriptionSection;

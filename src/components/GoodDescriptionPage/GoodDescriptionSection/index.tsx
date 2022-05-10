import { goodDataPropTypes } from "src/utils/types/componentsTypes";
import GoodDescriptionContent from "./GoodDescriptionContent";

const GoodDescriptionSection = ({goodData}:goodDataPropTypes) => {
  return (
    <section>
      <GoodDescriptionContent goodData={goodData} />
    </section>
  );
};

export default GoodDescriptionSection;

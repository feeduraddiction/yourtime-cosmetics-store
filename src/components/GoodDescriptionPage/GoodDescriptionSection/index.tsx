import { goodDataPropTypes } from "@assets/types";
import GoodDescriptionContent from "./GoodDescriptionContent";

const GoodDescriptionSection = ({goodData}:goodDataPropTypes) => {
  return (
    <section>
      <GoodDescriptionContent goodData={goodData} />
    </section>
  );
};

export default GoodDescriptionSection;

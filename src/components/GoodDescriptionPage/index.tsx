import { goodDataPropTypes } from "pages/catalogue/[category]/[goodID]";
import GoodDescriptionSection from "./GoodDescriptionSection";

const GoodDescriptionPage = ({goodData}: goodDataPropTypes) => {
  return (
    <main>
      <GoodDescriptionSection goodData={goodData} />
    </main>
  );
};

export default GoodDescriptionPage;

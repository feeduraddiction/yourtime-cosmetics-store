import { goodDataPropTypes } from "pages/[goodID]";
import GoodDescriptionSection from "./GoodDescriptionSection";

const GoodDescriptionPage = ({goodData}: goodDataPropTypes) => {
  return (
    <main>
      <GoodDescriptionSection goodData={goodData} />
    </main>
  );
};

export default GoodDescriptionPage;

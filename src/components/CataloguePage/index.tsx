import CategoriesSection from "@components/MainPage/CategoriesSection";
import TrendingSection from "@components/MainPage/TrendingSection";
import { goodsPropTypes } from "src/utils/types/componentsTypes";
import HeroSection from "./HeroSection";

const CataloguePage = ({goods}:goodsPropTypes) => {
  return (
    <main>
      <HeroSection title="Catalogue"/>
      <CategoriesSection/>
      <TrendingSection goods={goods}/>
    </main>
  );
};

export default CataloguePage;

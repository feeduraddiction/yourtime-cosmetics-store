import CategoriesSection from "@components/MainPage/CategoriesSection";
import TrendingSection from "@components/MainPage/TrendingSection";
import { goodsPropsTypes } from "pages";
import HeroSection from "./HeroSection";

const CataloguePage = ({goods}:goodsPropsTypes) => {
  return (
    <main>
      <HeroSection title="Catalogue"/>
      <CategoriesSection/>
      <TrendingSection goods={goods}/>
    </main>
  );
};

export default CataloguePage;

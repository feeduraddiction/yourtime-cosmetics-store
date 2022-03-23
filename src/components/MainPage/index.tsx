import { goodsPropTypes } from "@assets/types";
import AdvantagesSection from "./AdvantagesSection";
import CategoriesSection from "./CategoriesSection";
import DiscountSection from "./DiscountSection";
import HeroSection from "./HeroSection";
import NewsSection from "./NewsSection";
import TrendingSection from "./TrendingSection";



const MainPage = ({ goods }: goodsPropTypes) => {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <TrendingSection goods={goods} />
      <DiscountSection />
      <AdvantagesSection />
      <NewsSection />
    </main>
  );
};

export default MainPage;

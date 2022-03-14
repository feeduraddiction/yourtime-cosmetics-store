import AdvantagesSection from "./AdvantagesSection";
import CategoriesSection from "./CategoriesSection";
import DiscountSection from "./DiscountSection";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import NewsSection from "./NewsSection";
import TrendingSection from "./TrendingSection";

const MainPage =  () => {
    return <main>
        <HeroSection/>
        <CategoriesSection/>
        <TrendingSection/>
        <DiscountSection/>
        <AdvantagesSection/>
        <NewsSection/>
    </main>
}

export default MainPage;
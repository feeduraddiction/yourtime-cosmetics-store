import HeroSection from "@components/CataloguePage/HeroSection";
import { categoryDataPropTypes } from "pages/catalogue/[category]";
import CategoryProducts from "./CategoryProducts";

const CategoryPage = ({ categoryData }: categoryDataPropTypes) => {
  return (
    <main>
      <HeroSection title={categoryData[0].type} />
      <CategoryProducts goods={categoryData}/>
    </main>
  );
};

export default CategoryPage;

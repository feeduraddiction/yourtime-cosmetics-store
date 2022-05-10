import { goodsPropTypes } from "src/utils/types/componentsTypes";
import HeroSection from "@components/CataloguePage/HeroSection";
import CategoryProducts from "./CategoryProducts";

const CategoryPage = ({ goods }: goodsPropTypes) => {
  return (
    <main>
      <HeroSection title={goods[0].type} />
      <CategoryProducts goods={goods}/>
    </main>
  );
};

export default CategoryPage;

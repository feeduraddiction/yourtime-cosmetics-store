import Category from "./Category";
import classes from "./index.module.scss";
import face from '@assets/img/face-category.png'
import hair from '@assets/img/hair-category.png'
import hands from '@assets/img/hands-category.png'
import body from '@assets/img/body-category.png'

const CategoriesSection = () => {
  return (
    <section className={classes.categoriesSection}>
      <h3>Categories</h3>
      <div className={classes.categories}>
        <Category title="For Face" src={face} />
        <Category title="For Body" src={body} />
        <Category title="For Hand" src={hands} />
        <Category title="For Hair" src={hair} />
      </div>
    </section>
  );
};

export default CategoriesSection;

import NewsSectionContent from "./NewsSectionContent";
import classes from './index.module.scss';
import Counter from "@components/UI/Counter";


const NewsSection = () => {
  return (
    <section className={classes.newsSection}>
      <NewsSectionContent />
    </section>
  );
};

export default NewsSection;

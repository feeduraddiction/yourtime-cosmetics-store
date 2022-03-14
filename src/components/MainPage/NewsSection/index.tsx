import NewsSectionContent from "./NewsSectionContent";
import classes from './index.module.scss';


const NewsSection = () => {
  return (
    <section className={classes.newsSection}>
      <NewsSectionContent />
    </section>
  );
};

export default NewsSection;

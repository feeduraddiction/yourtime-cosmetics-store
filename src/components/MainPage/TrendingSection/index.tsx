import Card from "@components/UI/Card";
import classes from "./index.module.scss";

const TrendingSection = () => {
  return (
    <section className={classes.trendingSection}>
      <h3>Trending Products</h3>
      <div className={classes.trendingProducts}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default TrendingSection;

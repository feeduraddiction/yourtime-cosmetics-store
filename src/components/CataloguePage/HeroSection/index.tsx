import HeroSectionContent from "./HeroSectionContent";
import classes from "./index.module.scss";

const HeroSection = ({ title }: { title: string }) => {
  return (
    <section className={classes.heroSection}>
      <HeroSectionContent title={title} />
    </section>
  );
};

export default HeroSection;

import Button from "@components/UI/Button";
import classes from './index.module.scss';

const HeroSectionContent = () => {
  return (
    <div className={classes.heroSectionContent}>
      <h2>Pure & Natural</h2>
      <p>
        Make your bath a special treatment for your body. In our collection of
        bath salts, you can find the perfect one for you. We use only natural
        ingredients with care.
      </p>
      <Button>More details</Button>
    </div>
  );
};

export default HeroSectionContent;

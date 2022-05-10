import classes from "./index.module.scss";

const HeroSectionContent = ({title}:{title: string}) => {
  return (
    <div className={classes.hero}>
      <h1>{title}</h1>
      <p>
        Choose your body care.
        <br />
        We use only natural ingredients.
      </p>
    </div>
  );
};

export default HeroSectionContent;

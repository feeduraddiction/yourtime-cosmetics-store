import Button from "@components/UI/Button";
import classes from "./index.module.scss";

const NewsSectionForm = () => {
  return (
    <div className={classes.form}>
      <input type="text" placeholder="Email" />
      <Button type="submit">Subscribe</Button>
    </div>
  );
};

export default NewsSectionForm;

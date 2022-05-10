import Button from "@components/UI/Button";
import classes from './index.module.scss';

const DiscountSectionContent = () => {
  return (
    <div className={classes.content}>
      <h2>Shop Online and Get 10% Discount </h2>
      <p>For registered users only</p>
      <Button>More details</Button>
    </div>
  );
};

export default DiscountSectionContent;

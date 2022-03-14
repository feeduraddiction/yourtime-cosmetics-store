import DiscountSectionContent from "./DiscountSectionContent";

import classes from './index.module.scss';

const DiscountSection = () => {
  return <section className={classes.discountSection}>
      <DiscountSectionContent/>
  </section>;
};

export default DiscountSection;

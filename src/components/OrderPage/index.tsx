import OrderPageContent from "./OrderPageContent";
import classes from './index.module.scss';

const OrderPage = () => {
  return (
    <section className={classes.orderPage}>
      <OrderPageContent />
    </section>
  );
};

export default OrderPage;

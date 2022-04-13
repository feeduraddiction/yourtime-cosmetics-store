import OrderPageContent from "./OrderPageContent";
import classes from './index.module.scss';

const OrderPage = () => {
  return (
    <section className={classes.orderPage}>
      <h2>Ordering</h2>
      <OrderPageContent />
    </section>
  );
};

export default OrderPage;

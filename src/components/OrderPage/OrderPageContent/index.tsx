import OrderInput from "./OrderInput";
import classes from "./index.module.scss";
const OrderPageContent = () => {
  return (
    <main className={classes.content}>
      <h2>Ordering</h2>
      <OrderInput />
    </main>
  );
};

export default OrderPageContent;

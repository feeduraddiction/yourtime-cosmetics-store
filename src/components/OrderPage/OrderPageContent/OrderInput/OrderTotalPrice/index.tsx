import { selectCart } from "@store/slices/cartSlice";
import { useSelector } from "react-redux";
import OrderDetailsItem from "./OrderDetailsItem";
import classes from "./index.module.scss";

const OrderTotalPrice = () => {
  const cartGoods = useSelector(selectCart);
  const shipmentConst = 5;
  const totalPrice = cartGoods.reduce((acc, good) => {
    return good.price * good.quantity + acc;
  }, 0);
  return (
    <div className={classes.text}>
      <h5>Pre-total: ${totalPrice}</h5>
      <h5>Shipment: ${shipmentConst}</h5>
      <h3>Total: ${shipmentConst + totalPrice}</h3>
    </div>
  );
};

export default OrderTotalPrice;

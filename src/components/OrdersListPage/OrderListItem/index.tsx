import { orderPropTypes } from "@assets/types";
import classes from "./index.module.scss";
const OrderListItem = ({ order }: {order: orderPropTypes}) => {
  return (
    <div className={classes.order}>
      <h3>{order._id}</h3>
      <p>Address: {order.orderDetails.address}</p>
      <p>Country: {order.orderDetails.country}</p>
      <p>Date: {order.orderDetails.date}</p>
      <div className={classes.goods}>
        <h4>Goods:</h4>
        {order.orderDetails.goods.map((element) => (
          <div className={classes.good} key={element.id}>
            <p>{element.brand}</p>
            <h5>{element.name}</h5>
            <p>{element.quantity} pcs.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderListItem;

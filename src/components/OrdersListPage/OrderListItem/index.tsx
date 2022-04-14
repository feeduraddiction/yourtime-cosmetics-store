import { orderPropTypes } from "@assets/types";
import classes from "./index.module.scss";
const OrderListItem = ({ order }: orderPropTypes) => {
  return (
    <div className={classes.order}>
      <h3>{order.id}</h3>
      <p>Address: {order.orderInfo.orderDetails.address}</p>
      <p>Country: {order.orderInfo.orderDetails.country}</p>
      <p>Date: {order.orderInfo.orderDetails.date}</p>
      <div className={classes.goods}>
        <h4>Goods:</h4>
        {order.orderInfo.orderDetails.goods.map((element) => (
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

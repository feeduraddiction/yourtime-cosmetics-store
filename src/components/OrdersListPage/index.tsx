import { orderPropTypes } from "@assets/types";
import { selectUser } from "@store/slices/userSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import OrderListItem from "./OrderListItem";
import classes from "./index.module.scss";
const OrdersListPage = () => {
  const currentUser = useSelector(selectUser);

  const [data, setData] = useState<orderPropTypes[]>([]);

  useEffect(() => {
    fetch("api/ordersList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: currentUser }),
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <section className={classes.section}>
      {data.map((orderItem, index) => (
        <OrderListItem key={orderItem.order.id} order={orderItem.order} />
      ))}
    </section>
  );
};

export default OrdersListPage;

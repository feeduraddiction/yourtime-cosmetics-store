import { orderPropTypes } from "@assets/types";
import { selectUser } from "@store/slices/userSlice";
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import OrderListItem from "./OrderListItem";
import classes from "./index.module.scss";
import { useRouter } from "next/router";
import BackToShoppingBtn from "@components/UI/BackToShoppingBtn";

const OrdersListPage = () => {
  const router = useRouter();
  const currentUser = useSelector(selectUser);
  const [data, setData] = useState<orderPropTypes[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("api/ordersList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: currentUser }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoaded(true);
        setData(data);
      });
  }, []);

  return (
    <section className={classes.section}>
      {isLoaded && (
        <Fragment>
          <BackToShoppingBtn />
          <h2>{data.length ? "Your orders" : "You've got no orders yet"}</h2>
          {data.map((orderItem) => (
            <OrderListItem key={orderItem._id} order={orderItem} />
          ))}
        </Fragment>
      )}
    </section>
  );
};

export default OrdersListPage;

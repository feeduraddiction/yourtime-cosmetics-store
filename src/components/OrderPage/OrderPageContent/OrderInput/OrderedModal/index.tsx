import Button from "@components/UI/Button";
import { useRouter } from "next/router";
import { Fragment } from "react";
import classes from "./index.module.scss";
const OrderedModal = () => {
  const router = useRouter();
  return (
    <Fragment>
      <div className={classes.modal}>
        <h4>Thank you for your order!</h4>
        <Button
          onClick={() => {
            router.push("/");
          }}
        >
          Go to main
        </Button>
      </div>
      <div className={classes.backdrop}></div>
    </Fragment>
  );
};

export default OrderedModal;

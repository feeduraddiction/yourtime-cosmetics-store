import classes from "./index.module.scss";
import { useRouter } from "next/router";

const BackToShoppingBtn = () => {
  const router = useRouter();
  return (
    <div className={classes.back}>
      <button
        onClick={() => router.push("/catalogue")}
        className={classes.backBtn}
      >
        &#8592; Back to shopping
      </button>
    </div>
  );
};

export default BackToShoppingBtn;

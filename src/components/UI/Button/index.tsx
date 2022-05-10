import { buttonPropTypes } from "@utils/types/componentsTypes";
import classes from "./index.module.scss";

const Button = ({ children, onClick, type }: buttonPropTypes) => {
  return (
    <button className={classes.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

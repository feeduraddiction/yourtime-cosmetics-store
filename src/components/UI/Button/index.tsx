import classes from "./index.module.scss";

export interface buttonPropTypes {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button = ({ children, onClick, type }: buttonPropTypes) => {
  return (
    <button className={classes.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

import classes from "../index.module.scss";
import CartBtn from "./CartBtn";
import SearchBtn from "./SearchBtn";
import UserBtn from "./UserBtn";

const Nav = () => {
  return (
    <ul className={classes.nav}>
      <SearchBtn />
      <CartBtn />
      <UserBtn />
    </ul>
  );
};

export default Nav;

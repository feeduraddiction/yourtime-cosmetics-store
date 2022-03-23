import { CartIcon, PersonIcon } from "@assets/svgs/NavIcons";
import classes from "../index.module.scss";
import CartBtn from "./CartBtn";
import SearchBtn from "./SearchBtn";

const Nav = () => {
  return (
    <ul className={classes.nav}>
      <SearchBtn />
      <CartBtn />
      <li>
        <PersonIcon />
      </li>
    </ul>
  );
};

export default Nav;

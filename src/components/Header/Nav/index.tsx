import { CartIcon, PersonIcon } from "@assets/svgs/NavIcons";
import classes from "../index.module.scss";
import SearchBtn from "./SearchBtn";

const Nav = () => {
  return (
    <ul className={classes.nav}>
      <SearchBtn />
      <li>
        <div className={classes.cart}>
          <CartIcon />
          <div className={classes.cartCounter}>
            <p>15</p>
          </div>
        </div>
      </li>
      <li>
        <PersonIcon />
      </li>
    </ul>
  );
};

export default Nav;

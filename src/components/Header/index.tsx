import { selectSearchActive } from "@store/slices/searchSlice";
import Image from "next/image";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import classes from "./index.module.scss";
import Nav from "./Nav";
import Search from "./Search";

const Header = () => {
  const isSearchActive = useSelector(selectSearchActive);

  return (
    <header className={`${classes['header']} ${isSearchActive && classes.opacityOut}`}>
      {!isSearchActive && (
        <div className={classes.content}>
          <Image src={require("@assets/img/logo.png")} alt="logo" />
          <Nav />
        </div>
      )}
      {isSearchActive && <Search />}
    </header>
  );
};

export default Header;

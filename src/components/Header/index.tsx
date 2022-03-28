import { selectLoginWindowActive } from "@store/slices/loginWindowSlice";
import { selectSearchActive } from "@store/slices/searchSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import classes from "./index.module.scss";
import Login from "./Login";
import Nav from "./Nav";
import Search from "./Search";

const Header = () => {
  const isSearchActive = useSelector(selectSearchActive);
  const isLoginWindowActive = useSelector(selectLoginWindowActive);
  const router = useRouter();

  return (
    <header
      className={`${classes["header"]} ${isSearchActive && classes.opacityOut}`}
    >
      {!isSearchActive && (
        <div className={classes.content}>
          <Image
            src={require("@assets/img/logo.png")}
            alt="logo"
            onClick={() => {
              router.push("/");
            }}
          />
          <Nav />
          {isLoginWindowActive && <Login />}
        </div>
      )}
      {isSearchActive && <Search />}
    </header>
  );
};

export default Header;

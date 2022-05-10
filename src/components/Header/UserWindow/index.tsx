import LoginInput from "./LoginInput";
import classes from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "@store/slices/userSlice";
import { Fragment, useRef } from "react";
import AdminPanel from "./AdminPanel";
import UserPanel from "./UserPanel";
import Link from "next/link";
import { activateLoginWindowAction } from "@store/slices/loginWindowSlice";
import useClickOutside from "@assets/hooks/useClickOutside";

const UserWindow = () => {
  const userWindowRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  const clickOutsideHandler = () => {
    dispatch(activateLoginWindowAction());
  };

  useClickOutside(userWindowRef, clickOutsideHandler);
  return (
    <div className={classes.userWindow} ref={userWindowRef}>
      {!currentUser.username ? (
        <Fragment>
          <LoginInput />
          <p>
            New customer?{" "}
            <Link href="/signup">
              <a onClick={() => dispatch(activateLoginWindowAction())}>
                Start here
              </a>
            </Link>
          </p>
        </Fragment>
      ) : currentUser.isAdmin ? (
        <AdminPanel />
      ) : (
        <UserPanel username={currentUser.username} />
      )}
    </div>
  );
};

export default UserWindow;

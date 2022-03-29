import Button from "@components/UI/Button";
import { logoutAction } from "@store/slices/userSlice";
import { useDispatch } from "react-redux";

import classes from "./index.module.scss";

const AdminPanel = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logoutAction());
  };
  return (
    <div className={classes.adminPanel}>
      <h5>You are admin</h5>
      <Button>Manage goods</Button>
      <Button onClick={logoutHandler}>Log out</Button>
    </div>
  );
};

export default AdminPanel;

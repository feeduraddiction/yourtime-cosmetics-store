import Button from "@components/UI/Button";
import classes from './index.module.scss';
import { clearLocalCartAction } from "@store/slices/cartSlice";
import { logoutAction } from "@store/slices/userSlice";
import { useDispatch } from "react-redux";

const UserPanel = ({ username }: { username: string }) => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logoutAction());
    dispatch(clearLocalCartAction());
  };
  return (
    <div className={classes.userPanel}>
      <h5>{`Welcome ${username}`}</h5>
      <Button>My orders</Button>
      <Button onClick={logoutHandler}>Log Out</Button>
    </div>
  );
};

export default UserPanel;

import Button from "@components/UI/Button";
import { logoutAction } from "@store/slices/userSlice";
import { useDispatch } from "react-redux";

const UserPanel = ({ username }: { username: string }) => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logoutAction());
  };
  return (
    <div>
      <h5>{`Welcome ${username}`}</h5>
      <Button onClick={logoutHandler}>Log Out</Button>
    </div>
  );
};

export default UserPanel;

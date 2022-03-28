import { PersonIcon } from "@assets/svgs/NavIcons";
import { activateLoginWindowAction } from "@store/slices/loginWindowSlice";
import { useDispatch } from "react-redux";

const UserBtn = () => {
  const dispatch = useDispatch();
  const showUserWindow = () => {
    dispatch(activateLoginWindowAction());
  };

  return (
    <li>
      <PersonIcon onClick={showUserWindow} />
    </li>
  );
};

export default UserBtn;

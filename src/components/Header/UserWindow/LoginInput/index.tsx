import classes from "./index.module.scss";
import Button from "@components/UI/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authorizeUserAction } from "@store/slices/userSlice";

const LoginInput = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);

  const usernameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    if (e.target.value.trim().length > 0) {
      setInvalidInput(false);
    }
  };

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value.trim().length > 0) {
      setInvalidInput(false);
    }
  };

  const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username.trim().length === 0 && password.trim().length === 0) {
      setInvalidInput(true);
      return;
    }
    await fetch("api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!Object.keys(data).length) {
          setInvalidInput(true);
        } else {
          dispatch(
            authorizeUserAction({
              username: data.username,
              isAdmin: data.isAdmin,
            })
          );
        }
      });
  };

  return (
    <form onSubmit={loginHandler} className={`${classes["input"]} ${invalidInput && classes.invalid}`}>
      <input type="text" placeholder="Login" onChange={usernameChangeHandler} />
      <input
        type="password"
        placeholder="Password"
        onChange={passwordChangeHandler}
      />
      <Button type="submit">
        Log in
      </Button>
    </form>
  );
};

export default LoginInput;

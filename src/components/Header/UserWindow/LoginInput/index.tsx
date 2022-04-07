import classes from "./index.module.scss";
import Button from "@components/UI/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authorizeUserAction } from "@store/slices/userSlice";
import {
  clearLocalCartAction,
  updateCartAction,
} from "@store/slices/cartSlice";

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

    try {
      const login = async () => {};
      const res = await fetch("api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = res.json();

      dispatch(
        authorizeUserAction({
          id: (await data).id,
          username: (await data).username,
          isAdmin: (await data).isAdmin,
          email: (await data).email,
          metadata: {
            cart: (await data).metadata.cart,
          },
        })
      );
      dispatch(updateCartAction((await data).metadata.cart));
    } catch (error) {
      setInvalidInput(true);
    }
  };

  return (
    <form
      onSubmit={loginHandler}
      className={`${classes["input"]} ${invalidInput && classes.invalid}`}
    >
      <input type="text" placeholder="Login" onChange={usernameChangeHandler} />
      <input
        type="password"
        placeholder="Password"
        onChange={passwordChangeHandler}
      />
      <Button type="submit">Log in</Button>
    </form>
  );
};

export default LoginInput;

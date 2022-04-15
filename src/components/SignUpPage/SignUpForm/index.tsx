import Button from "@components/UI/Button";
import { selectCart } from "@store/slices/cartSlice";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./index.module.scss";
import { authorizeUserAction } from "@store/slices/userSlice";

  
const SignUpForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reEnteredPassword, setReEnteredPassword] = useState("");
  const [invalidReEnteredPassword, setInvalidReEnteredPassword] =
    useState(false);

  const cart = useSelector(selectCart);

  const changeUsernameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const changeEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const changePasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const changeReEnteredPasswordHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setReEnteredPassword(e.target.value);
    setInvalidReEnteredPassword(false);
  };

  const signUpHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== reEnteredPassword) {
      setInvalidReEnteredPassword(true);
      return;
    }
    const res = await fetch("api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        email,
        metadata: { cart: cart },
      }),
    });
    const data = await res.json();

    if (res.status === 200) {
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
      router.push("/");
    }
  };

  return (
    <form onSubmit={signUpHandler} className={classes.form}>
      <h3>Create account</h3>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        required
        minLength={1}
        maxLength={24}
        pattern="^[a-zA-Z0-9]+$"
        title="English charecters and digits without spaces"
        onChange={changeUsernameHandler}
      />
      <label htmlFor="email">E-mail</label>
      <input required type="email" id="email" onChange={changeEmailHandler} />
      <label htmlFor="password">Password</label>
      <input
        required
        type="password"
        id="password"
        placeholder="At least 6 characters"
        minLength={6}
        onChange={changePasswordHandler}
      />
      <label htmlFor="re-entered-password">Re-enter password</label>
      <input
        required
        type="password"
        id="re-entered-password"
        minLength={6}
        onChange={changeReEnteredPasswordHandler}
        className={`${invalidReEnteredPassword && classes.invalid}`}
      />
      <Button type="submit">Sign Up</Button>
    </form>
  );
};

export default SignUpForm;

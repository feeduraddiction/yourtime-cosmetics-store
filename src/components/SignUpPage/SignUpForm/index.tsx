import Button from "@components/UI/Button";
import React, { useRef, useState } from "react";
import classes from "./index.module.scss";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reEnteredPassword, setReEnteredPassword] = useState("");
  //   const [invalidUsername, setInvalidUsername] = useState(false);
  //   const [invalidEmail, setInvalidEmail] = useState(false);
  //   const [invalidPassword, setInvalidPassword] = useState(false);
  const [invalidReEnteredPassword, setInvalidReEnteredPassword] =
    useState(false);

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
        body: JSON.stringify({ username, password, email }),
      }); 
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

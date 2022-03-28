import classes from "./index.module.scss";
import Button from "@components/UI/Button";
import { useState } from "react";

const LoginInput = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async () => {
    await fetch("api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className={classes.input}>
      <input
        type="text"
        placeholder="Login"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={loginHandler} type="submit">
        Log in
      </Button>
    </div>
  );
};

export default LoginInput;

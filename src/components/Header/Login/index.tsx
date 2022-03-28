import LoginInput from "./LoginInput";
import classes from "./index.module.scss";

const Login = () => {
  return (
    <div className={classes.login}>
      <LoginInput />
      <p>
        New customer? <a href="">Start here</a>
      </p>
    </div>
  );
};

export default Login;

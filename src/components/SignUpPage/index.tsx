import SignUpForm from "./SignUpForm";
import classes from './index.module.scss';

const SignUpPage = () => {
  return (
    <section className={classes.section}>
      <SignUpForm />
    </section>
  );
};

export default SignUpPage;

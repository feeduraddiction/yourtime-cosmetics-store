import Button from "@components/UI/Button";
import React, { useState } from "react";
import classes from "./index.module.scss";

const NewsSectionForm = () => {
  const [email, setEmail] = useState("");
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Subscribed! You will gett all news to ${email}`);
  };

  const changeEmailHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Email"
        onChange={changeEmailHandler}
        required
      />
      <Button type="submit">Subscribe</Button>
    </form>
  );
};

export default NewsSectionForm;

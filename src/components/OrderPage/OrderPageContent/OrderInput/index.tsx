import ContactsInput from "./ContactsInput";
import AddressInput from "./AddressInput";
import DateTimeInput from "./DateTimeInput";
import CommentInput from "./CommentInput";

import classes from './index.module.scss';

const OrderInput = () => {
  const submitHandler = () => {};
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <ContactsInput />
      <AddressInput />
      <DateTimeInput />
      <CommentInput />
    </form>
  );
};

export default OrderInput;

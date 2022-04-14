import React, { useState } from "react";

import ContactsInput from "./ContactsInput";
import AddressInput from "./AddressInput";
import DateTimeInput from "./DateTimeInput";
import CommentInput from "./CommentInput";
import Button from "@components/UI/Button";
import OrderTotalPrice from "./OrderTotalPrice";
import classes from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "@store/slices/userSlice";
import { clearLocalCartAction, selectCart } from "@store/slices/cartSlice";
import { useRouter } from "next/router";

const OrderInput = () => {
  const currentUser = useSelector(selectUser);
  const cartGood = useSelector(selectCart);
  const router = useRouter();
  const dispatch = useDispatch();
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");

  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");

  const [date, setDate] = useState("");

  const [comment, setComment] = useState("");

  const changeFullnameHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setFullname(e.currentTarget.value);
  };

  const changePhoneHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setPhone(e.currentTarget.value);
  };

  const changeCountryHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setCountry(e.currentTarget.value);
  };

  const changeAddressHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setAddress(e.currentTarget.value);
  };

  const changeDateHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setDate(e.currentTarget.value);
  };

  const changeCommentHandler = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setComment(e.currentTarget.value);
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const order = {
      userID: currentUser.id,
      username: currentUser.username,
      status: "confirmed",
      orderDetails: {
        fullname,
        phone,
        date,
        address,
        country,
        comment,
        goods: cartGood,
      },
    };
    const res = await fetch("api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({order, user: currentUser }),
    });
    alert("Thank you for your order!");
    dispatch(clearLocalCartAction());
    router.push("/");
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <ContactsInput
        onChangeFullname={changeFullnameHandler}
        onChangePhone={changePhoneHandler}
      />
      <AddressInput
        onChangeCountry={changeCountryHandler}
        onChangeAddress={changeAddressHandler}
      />
      <DateTimeInput onChangeDate={changeDateHandler} />
      <CommentInput onChangeComment={changeCommentHandler} />
      <div className={classes.total}>
        <OrderTotalPrice />
        <Button type="submit">Checkout</Button>
      </div>
    </form>
  );
};

export default OrderInput;

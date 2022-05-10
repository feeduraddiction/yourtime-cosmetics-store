import React, { useState } from "react";

const ContactsInput = ({
  onChangeFullname,
  onChangePhone,
}: {
  onChangeFullname: (e: React.FormEvent<HTMLInputElement>) => void;
  onChangePhone: (e: React.FormEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div>
      <h4>Contacts</h4>
      <input
        type="text"
        placeholder="Full name"
        required
        onChange={onChangeFullname}
      />
      <input
        type="text"
        placeholder="Phone number"
        pattern="^[0-9]+$"
        required
        title="Only digits allowed"
        onChange={onChangePhone}
      />
    </div>
  );
};

export default ContactsInput;

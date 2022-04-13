import React from "react";

const DateTimeInput = ({
  onChangeDate,
}: {
  onChangeDate: (e: React.FormEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div>
      <h4>Date</h4>
      <input type="date" onChange={onChangeDate} />
    </div>
  );
};

export default DateTimeInput;

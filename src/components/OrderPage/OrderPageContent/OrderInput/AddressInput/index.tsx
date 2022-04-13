const AddressInput = ({
  onChangeCountry,
  onChangeAddress,
}: {
  onChangeCountry: (e: React.FormEvent<HTMLInputElement>) => void;
  onChangeAddress: (e: React.FormEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div>
      <h4>Address</h4>
      <input
        type="text"
        placeholder="Country"
        required
        onChange={onChangeCountry}
      />
      <input
        type="text"
        placeholder="Address"
        required
        onChange={onChangeAddress}
      />
    </div>
  );
};

export default AddressInput;

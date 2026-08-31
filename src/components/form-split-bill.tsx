import { useState } from "react";
import { FriendType } from "../types/friend.type";
import Button from "./button";

type FormSplitBillProps = {
  selectedFriend: FriendType;
  onSpliteBill: (value: number) => void;
};
export default function FormSplitBill({
  selectedFriend: { name },
  onSpliteBill,
}: FormSplitBillProps) {
  // States
  const [bill, setBill] = useState(0);
  const [paidByUser, setPaidByUser] = useState(0);
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  // Variables
  const paidByFriend = bill - paidByUser;

  // Handlers
  function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!bill) return;
    onSpliteBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmitForm}>
      <h2>Split abill with {name} </h2>

      {/* bill */}
      <label htmlFor="bill"> 💴Bill value</label>
      <input
        value={bill}
        onChange={(e) =>
          setBill(Number(e.target.value) > 0 ? Number(e.target.value) : 0)
        }
        type="text"
        id="bill"
      />

      {/* your expense */}
      <label htmlFor="yourExpense"> 🙍Your expense</label>
      <input
        disabled={!bill}
        value={bill ? paidByUser : bill}
        onChange={(e) => {
          const value = Number(e.target.value);

          if (value >= 0 && value <= bill) {
            setPaidByUser(value);
          }
        }}
        type="number"
        id="yourExpense"
        min={0}
      />

      {/* friend expense */}
      <label htmlFor="friendExpenses">🧑‍🤝‍🧑 {name}&apos; expense</label>
      <input
        value={bill ? paidByFriend : 0}
        disabled
        type="text"
        id="friendExpenses"
      />

      {/* who is paying */}
      <label> 😊Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{name}</option>
      </select>

      {/* action button */}
      <Button type="submit">Split bill</Button>
    </form>
  );
}

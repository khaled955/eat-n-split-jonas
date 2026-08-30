import { FriendType } from "../types/friend.type";
import Button from "./button";

type FormSplitBillProps = {
  friend: FriendType;
};
export default function FormSplitBill({
  friend: { name },
}: FormSplitBillProps) {
  return (
    <form className="form-split-bill">
      <h2>Split abill with {name} </h2>

      {/* bill */}
      <label htmlFor="bill"> 💴Bill value</label>
      <input type="text" id="bill" />

      {/* your expense */}
      <label htmlFor="yourExpense"> 🙍Your expense</label>
      <input type="text" id="yourExpense" />

      {/* friend expense */}
      <label htmlFor="friendExpenses">🧑‍🤝‍🧑 {name}&apos; expense</label>
      <input disabled type="text" id="friendExpenses" />

      {/* who is paying */}
      <label> 😊Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">Your friend</option>
      </select>

      {/* action button */}
      <Button type="submit">Split bill</Button>
    </form>
  );
}

import { FriendType } from "../types/friend.type";
import Button from "./button";

type FriendProps = {
  friend: FriendType;
};

export default function Friend({
  friend: { balance, image, name },
}: FriendProps) {
  return (
    <li>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      {balance < 0 && (
        <p className="red">
          You owe {name} ${Math.abs(balance)}
        </p>
      )}
      {balance > 0 && (
        <p className="green">
          {name} owes you ${balance}
        </p>
      )}
      {balance === 0 && <p>You and {name} are even</p>}

      <Button type="submit">Select</Button>
    </li>
  );
}

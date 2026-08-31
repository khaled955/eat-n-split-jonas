import { FriendType } from "../types/friend.type";
import Button from "./button";

type FriendProps = {
  friend: FriendType;
  onSelect: (friend: FriendType) => void;
  selectedFriend: FriendType | null;
};

export default function Friend({
  friend,
  onSelect,
  selectedFriend,
}: FriendProps) {
  // Variables
  const { balance, image, name, id } = friend;
  const isSelected = selectedFriend?.id === id;
  return (
    <li className={isSelected ? "selected" : ""}>
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

      <Button onClick={() => onSelect(friend)} type="submit">
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

import { FriendType } from "../types/friend.type";
import Friend from "./friend";

type FriendsListProps = {
  friends: FriendType[];
  onSelect:(friend:FriendType)=>void;
  selectedFriend:FriendType | null;
};
export default function FriendsList({ friends,onSelect,selectedFriend }: FriendsListProps) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id}  onSelect={onSelect} selectedFriend={selectedFriend}/>
      ))}
    </ul>
  );
}

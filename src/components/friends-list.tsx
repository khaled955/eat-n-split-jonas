import { FriendType } from "../types/friend.type";
import Friend from "./friend";

type FriendsListProps = {
  friends: FriendType[];
};
export default function FriendsList({ friends }: FriendsListProps) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

import { useState } from "react";
import { initialFriends } from "../data/friend-list.data";
import { FriendType } from "./types/friend.type";
import FormAddFriend from "./components/form-add-friend";
import Button from "./components/button";
import FormSplitBill from "./components/form-split-bill";
import FriendsList from "./components/friends-list";
const demoFriend = {
  id: 118836,
  name: "Clark",
  image: "https://i.pravatar.cc/48?u=118836",
  balance: -7,
};

export default function App() {
  // States
  const [showAddFriend, setshowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  // Handlers
  function handleToggleAddForm() {
    setshowAddFriend((current) => !current);
  }

  function handleAddNewFriend(newFriend: FriendType) {
    setFriends((friends) => [...friends, newFriend]);
    handleToggleAddForm();
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddNewFriend} />}
        <Button onClick={handleToggleAddForm} type="button">
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>

      <FormSplitBill friend={demoFriend} />
    </div>
  );
}

import { useState } from "react";
import { initialFriends } from "../data/friend-list.data";
import { FriendType } from "./types/friend.type";
import FormAddFriend from "./components/form-add-friend";
import Button from "./components/button";
import FormSplitBill from "./components/form-split-bill";
import FriendsList from "./components/friends-list";

export default function App() {
  // States
  const [showAddFriend, setshowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState<FriendType | null>(null);

  // Handlers
  function handleToggleAddForm() {
    setshowAddFriend((current) => !current);
  }

  function handleAddNewFriend(newFriend: FriendType) {
    setFriends((friends) => [...friends, newFriend]);
    handleToggleAddForm();
  }

  function handleSelectAndToggleFriend(friend: FriendType) {
    setSelectedFriend((current) => (current?.id === friend.id ? null : friend));
    setshowAddFriend(false);
  }
  function handleSpliteBill(value:number){
  setFriends(friends=> friends.map(friend=> friend.id === selectedFriend?.id ? {...friend,balance:friend.balance + value }:friend))
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelect={handleSelectAndToggleFriend}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddNewFriend} />}

        <Button onClick={handleToggleAddForm} type="button">
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>

      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          key={selectedFriend.id}
          onSpliteBill={handleSpliteBill}
        />
      )}
    </div>
  );
}

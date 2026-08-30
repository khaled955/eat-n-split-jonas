import { useState } from "react";
import { FriendType } from "../types/friend.type";
import Button from "./button";

const DEFAULT_AVATAR = "https://i.pravatar.cc/48";

type FormAddFriend = {
  onAddFriend: (newFriend: FriendType) => void;
};
export default function FormAddFriend({ onAddFriend }: FormAddFriend) {
  // States
  const [friendName, setFriendName] = useState("");
  const [imgeUrl, setImgeUrl] = useState(DEFAULT_AVATAR);

  // Handlers
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!friendName || !imgeUrl) return;
    const id = crypto.randomUUID();
    const newFriend = {
      balance: 0,
      id,
      image: `${imgeUrl}?=${id}`,
      name: friendName,
    };
    // add new friend to list
    onAddFriend(newFriend);
   
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="friend">🧑‍🤝‍🧑Friend Name</label>
      <input
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
        type="text"
        id="friend"
      />

      <label htmlFor="url"> 📷Image Url</label>
      <input
        value={imgeUrl}
        onChange={(e) => setImgeUrl(e.target.value)}
        type="text"
        id="url"
      />
      <Button type="submit">Add</Button>
    </form>
  );
}

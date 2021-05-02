import React, { useState } from "react";
import { dbService } from "../firebase";

const Nweet = ({ nweetObj, isOwner }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newNweet, setNewNweet] = useState(nweetObj.text);
  const onDelete = async () => {
    const ok = window.confirm("정말로 지우시겠습니까?");
    if (ok) {
      await dbService.collection("nweets").doc(nweetObj.id).delete();
    }
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewNweet(value);
  };

  const toggleEditing = () => {
    setNewNweet(nweetObj.text);
    setIsEditing((prev) => !prev);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsEditing(false);
    await dbService
      .collection("nweets")
      .doc(nweetObj.id)
      .update({ text: newNweet });
  };
  return (
    <div>
      <h4>{nweetObj.text}</h4>

      {isEditing ? (
        <>
          <form onSubmit={onSubmit}>
            <input type="text" value={newNweet} onChange={onChange} />
            <input type="submit" value="Update" />
          </form>
          <button onClick={toggleEditing}>Cancle</button>
        </>
      ) : (
        <>
          {isOwner && (
            <>
              <button onClick={toggleEditing}>Edit</button>
              <button onClick={onDelete}>Delete</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Nweet;

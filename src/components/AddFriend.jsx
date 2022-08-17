import React from "react";
import { useAuthContext } from "../context/authContext";
import { useMessageContext } from "../context/messageContext";
import style from "./../css/AddFriend.module.css";
const AddFriend = () => {
  const { user } = useAuthContext();
  const { addFriend } = useMessageContext();

  const addNewFriend = () => {
    console.log(user?.email);
    addFriend("Newly added email");
  };

  return (
    <div className={style.add__friends}>
      <h2 className={style.add__friends__title}>
        Connect with other people on the platform
      </h2>
      <div className={style.friends}>
        <div className={style.friend}>
          <p>Ahmed Afolasewa</p>
          <button onClick={addNewFriend}>Add</button>
        </div>
        <div className={style.friend}>
          <p>Ahmed Afolasewa</p>
          <button>Add</button>
        </div>
        <div className={style.friend}>
          <p>Ahmed Afolasewa</p>
          <button>Add</button>
        </div>
        <div className={style.friend}>
          <p>Ahmed Afolasewa</p>
          <button>Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddFriend;

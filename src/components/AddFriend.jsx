import React from "react";
import style from "./../css/AddFriend.module.css";
const AddFriend = () => {
  return (
    <div className={style.add__friends}>
      <h2 className={style.add__friends__title}>
        Connect with other people on the platform
      </h2>
      <div className={style.friends}>
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
        <div className={style.friend}>
          <p>Ahmed Afolasewa</p>
          <button>Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddFriend;

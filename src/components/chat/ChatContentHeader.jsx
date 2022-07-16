import React from "react";
import { FaList } from "react-icons/fa";
import Avatar from "./../../images/avatar.png";
import style from "./../../css/ChatContentHeader.module.css";
const ChatContentHeader = () => {
  return (
    <div className={style.chatContentHeader}>
      <div className={style.chatContentHeader__text}>
        <img src={Avatar} alt="" width={"50px"} />
        <p>Message Name</p>
      </div>
      <div className={style.chatContentHeader__icon}>
        <FaList />
      </div>
    </div>
  );
};

export default ChatContentHeader;

import React from "react";
import { FaEdit } from "react-icons/fa";
import Avatar from "./../../images/avatar.png";
import style from "./../../css/MessageList.module.css";

const MessageList = () => {
  return (
    <div className={style.messageList}>
      <div className={style.messageList__header}>
        <p>Message List</p>
        <FaEdit />
      </div>
      <div className={style.messageList__content}>
        <div className={style.messageList__item}>
          <img src={Avatar} alt=""  />
          <p>Name of Message</p>
        </div>
        <div className={style.messageList__item}>
          <img src={Avatar} alt=""  />
          <p>Name of Message</p>
        </div>
        <div className={style.messageList__item}>
          <img src={Avatar} alt=""  />
          <p>Name of Message</p>
        </div>
        <div className={style.messageList__item}>
          <img src={Avatar} alt=""  />
          <p>Name of Message</p>
        </div>
        <div className={style.messageList__item}>
          <img src={Avatar} alt=""  />
          <p>Name of Message</p>
        </div>
        <div className={style.messageList__item}>
          <img src={Avatar} alt=""  />
          <p>Name of Message</p>
        </div>
        <div className={style.messageList__item}>
          <img src={Avatar} alt=""  />
          <p>Name of Message</p>
        </div>
        <div className={style.messageList__item}>
          <img src={Avatar} alt=""  />
          <p>Name of Message</p>
        </div>
        <div className={style.messageList__item}>
          <img src={Avatar} alt=""  />
          <p>Name of Message</p>
        </div>
        <div className={style.messageList__item}>
          <img src={Avatar} alt=""  />
          <p>Name of Message</p>
        </div>
      </div>
    </div>
  );
};

export default MessageList;

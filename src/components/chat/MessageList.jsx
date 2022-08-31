import React, {useEffect} from "react";
import { FaEdit } from "react-icons/fa";
import { useMessageContext } from "../../context/messageContext";
import { useAuthContext } from "../../context/authContext";
import Avatar from "./../../images/avatar.png";
import style from "./../../css/MessageList.module.css";

const MessageList = () => {
  const {friends, getFriendList} = useMessageContext();
  const {user} = useAuthContext();
  useEffect(() => {
    getFriendList(user)
  }, [user])
  console.log(friends)
  return (
    <div className={style.messageList}>
      <div className={style.messageList__header}>
        <p>Message List</p>
        <FaEdit />
      </div>
      <div className={style.messageList__content}>
      {
        friends ? friends.map((friend, index) => (
          <div className={style.messageList__item} key={index}>
          <img src={Avatar} alt="" />
          <p>{friend}</p>
        </div>
        )) : "Hello"
      }
      </div>
    </div>
  );
};

export default MessageList;

import React from "react";
import ChatContentHeader from "./ChatContentHeader";
import style from "./../../css/ChatContent.module.css";
const ChatContent = () => {
  return (
    <div className={style.chatContent}>
      <ChatContentHeader />
    </div>
  );
};

export default ChatContent;

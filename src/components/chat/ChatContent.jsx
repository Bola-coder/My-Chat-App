import React from "react";
import ChatContentHeader from "./ChatContentHeader";
import style from "./../../css/ChatContent.module.css";
import MessageContent from "./MessageContent";
const ChatContent = () => {
  return (
    <div className={style.chatContent}>
      <ChatContentHeader />
      <MessageContent />
    </div>
  );
};

export default ChatContent;

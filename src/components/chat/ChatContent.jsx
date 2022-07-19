import React from "react";
import ChatContentHeader from "./ChatContentHeader";
import { useMessageContext } from "../../context/messageContext";
import style from "./../../css/ChatContent.module.css";
import MessageContent from "./MessageContent";
const ChatContent = () => {
  const { messages } = useMessageContext();
  return (
    <div className={style.chatContent}>
      <ChatContentHeader />
      <MessageContent />
    </div>
  );
};

export default ChatContent;

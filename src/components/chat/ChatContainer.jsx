import React from "react";
import MessageList from "./MessageList";
import style from "./../../css/ChatContainer.module.css";
import ChatContent from "./ChatContent";

const ChatContainer = () => {
  return (
    <section className={style.chat__container}>
      <div className={style.head}>
        <h2>Abatoms Chat</h2>
        <button>Logout</button>
      </div>
      <div className={style.chat__body}>
        <MessageList />
        <ChatContent />
      </div>
    </section>
  );
};

export default ChatContainer;

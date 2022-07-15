import React from "react";
import MessageList from "./MessageList";
import style from "./../../css/ChatContainer.module.css";

const ChatContainer = () => {
  return (
    <section className={style.chat__container}>
      <h2>Abatoms Chat</h2>
      <button>Logout</button>
      <MessageList />
    </section>
  );
};

export default ChatContainer;

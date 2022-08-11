import React from "react";
import MessageList from "./MessageList";
import style from "./../../css/ChatContainer.module.css";
import ChatContent from "./ChatContent";
import { Link } from "react-router-dom";

const ChatContainer = () => {
  return (
    <section className={style.chat__container}>
      <div className={style.head}>
        <h2>Abatoms Chat</h2>
        <div>
          <Link to ="/add-friend">
            <button>Add Friend</button>
          </Link>
          <button>Logout</button>
        </div>
      </div>
      <div className={style.chat__body}>
        <MessageList />
        <ChatContent />
      </div>
    </section>
  );
};

export default ChatContainer;

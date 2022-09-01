import React from "react";
import MessageList from "./MessageList";
import ChatContent from "./ChatContent";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";
import style from "./../../css/ChatContainer.module.css";

const ChatContainer = () => {
  const { logout } = useAuthContext();
  return (
    <section className={style.chat__container}>
      <div className={style.head}>
        <h2>Abatoms Chat</h2>
        <div>
          <Link to="/add-friend">
            <button>Add Friend</button>
          </Link>
          <button onClick={logout}>Logout</button>
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

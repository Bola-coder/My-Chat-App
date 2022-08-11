import React, { useState, useContext, createContext } from "react";
import { useAuthContext } from "./authContext";
import { collection, onSnapshot, getDocs } from "firebase/firestore";
import { db } from "./../utils/firebase";

const MessageContext = createContext();
export const useMessageContext = () => {
  return useContext(MessageContext);
};

const MessageProvider = ({ children }) => {
  const { user } = useAuthContext();
  const colRef = collection(
    db,
    "messages",
    "WqJVSPovIdOleneofYCS",
    "friends",
    "sZr3py8jWOuFkKQ9mBJy",
    "messageContent"
  );

  const userColRef = collection(db, "users");

  const [messages, setMessages] = useState("");

  onSnapshot(colRef, (snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.data());
    });
  });

  const addFriend = (email) => {
    getDocs(userColRef).then((docs) => {
      docs.forEach((doc) => {
        if (
          user?.email !== doc.data()?.email &&
          !doc.data()?.friends.includes(email)
        ) {
          console.log("Friend request sent.");
        }
      });
    });
  };

  addFriend();

  const values = {
    messages,
    setMessages,
  };

  return (
    <MessageContext.Provider value={values}>{children}</MessageContext.Provider>
  );
};

export default MessageProvider;

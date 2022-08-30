import React, { useState, useContext, createContext } from "react";
import {
  collection,
  doc,
  getDocs,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "./../utils/firebase";
import { useAuthContext } from "./authContext";

const MessageContext = createContext();
export const useMessageContext = () => {
  return useContext(MessageContext);
};

const MessageProvider = ({ children }) => {
  const userColRef = collection(db, "users");
  const [messages, setMessages] = useState("");
  const [userList, setUserList] = useState("");
  const [userId, setUserId] = useState("");
  const { user } = useAuthContext();

  const addFriend = (email) => {
    getDocs(userColRef)
      .then((docs) => {
        docs.forEach((docu) => {
          if (
            user?.email === docu.data().email &&
            !docu.data().friends.includes(email)
          ) {
            setUserId(docu.id);
            console.log(docu.id);
            const docRef = doc(db, "users", userId);
            updateDoc(docRef, {
              friends: arrayUnion(email),
            })
              .then(() => {
                console.log("Friend added");
              })
              .catch((err) => {
                console.log(err.message);
              });
          } else {
            console.log(`${email} is already your friend`);
            return;
          }
        });
      })
      .then(() => {
        return;
      });
  };

  const getAllUsersNotInFriendList = (currentUser) => {
    setUserList("")
    getDocs(userColRef).then((snapshot) => {
      snapshot.docs.forEach((document) => {
        setUserList(prev => [...prev, document.data().email]);
      });
    });
    
  };

  const values = {
    messages,
    userList,
    setUserList,
    setMessages,
    addFriend,
    getAllUsersNotInFriendList,
  };

  return (
    <MessageContext.Provider value={values}>{children}</MessageContext.Provider>
  );
};

export default MessageProvider;

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
  const [friends, setFriends] = useState(null);
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
            const docRef = doc(db, "users", userId);
            updateDoc(docRef, {
              friends: arrayUnion(email),
            })
              .then(() => {
                addCurrentUserToFriendList(user.email, email)
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
      }).catch(err => {
        console.log('Getting document error occured: ' , err)
      })
  };

  // A function to add the current user to a new friend friend's list
  const addCurrentUserToFriendList = (currentUserEmail, friendEmail) => {
    getDocs(userColRef).then(snapshot => {
      snapshot.docs.forEach(document => {
        if(document.data().email === friendEmail){
          const docId = document.id;
          const  documentRef = doc(userColRef, docId)
          updateDoc(documentRef, {
            friends: arrayUnion(currentUserEmail)
          })
          .then(() => {
            console.log("Current user has been added to friend email");
          })
        }
      })
    })
  }

  const getAllUsersNotInFriendList = (currentUser) => {
    getDocs(userColRef).then((snapshot) => {
      setUserList("")
      snapshot.docs.forEach((document) => {
        if(document.data().email !== currentUser.email){
          setUserList(prev => [...prev, document.data().email]);
        }
      });
    });
  };

  const getFriendList = (currentUser) => {
    getDocs(userColRef).then(snapshot => {
      snapshot.docs.forEach(document => {
        if(document.data().email === currentUser.email){
          setFriends(document.data().friends)
        }
      })
    })
  }


  const values = {
    messages,
    userList,
    friends,
    addFriend,
    getAllUsersNotInFriendList,
    getFriendList,
  };

  return (
    <MessageContext.Provider value={values}>{children}</MessageContext.Provider>
  );
};

export default MessageProvider;

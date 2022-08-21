import React, { useEffect } from "react";
import { useAuthContext } from "../context/authContext";
import { useMessageContext } from "../context/messageContext";
import { Link } from "react-router-dom";
import style from "./../css/AddFriend.module.css";
const AddFriend = () => {
  const { user } = useAuthContext();
  const { userList, addFriend, getAllUsersNotInFriendList } =
    useMessageContext();

  useEffect(() => {
    getAllUsersNotInFriendList(user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(userList);

  const addNewFriend = () => {
    console.log(user?.email);
    addFriend("Newly added email");
  };

  return (
    <div className={style.add__friends}>
      <Link to="/chats">
        <button>Back</button>
      </Link>
      <h2 className={style.add__friends__title}>
        Connect with other people on the platform
      </h2>

      <div className={style.friends}>
        {userList ? (
          userList.map((user) => (
            <div className={style.friend} key={user.email}>
              <p>{user.email}</p>
              <button onClick={addNewFriend}>Add</button>
            </div>
          ))
        ) : (
          <p>Other users not found</p>
        )}
      </div>
    </div>
  );
};

export default AddFriend;

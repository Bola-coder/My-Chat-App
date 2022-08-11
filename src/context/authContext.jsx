import React, { createContext, useContext, useState } from "react";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { auth, db } from "./../utils/firebase";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  auth.languageCode = "it";
  const [user, setUser] = useState(null);
  const [authError, setAuthErrorr] = useState(null);
  const colRef = collection(db, "users");

  //   Function to add user to db if user doesn't exist already:
  const addToDb = (user) => {
    let userExist;
    getDocs(colRef)
      .then((snapshot) => {
        userExist = snapshot.docs.some(
          (doc) => doc.data().email === user.email
        );
      })
      .then(() => {
        if (!userExist) {
          addDoc(colRef, {
            token: user.accessToken,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
            friends: [],
          })
            .then(() => {
              navigate("/chats");
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          console.log("User Exist");
          navigate("/chats");
        }
      })
      .catch((err) => console.log("Error", err));
  }; // End of addToDB

  //   Function to use auth based on provider
  const authFunction = (auth, provider) => {
    return signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
        addToDb(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        setAuthErrorr(error);
      });
  };

  //   Sign up with google function.
  function authWithGoogle() {
    const provider = new GoogleAuthProvider();
    authFunction(auth, provider);
  }

  //   Sign up with Facebook Option
  function authWithFacebook() {
    const provider = new FacebookAuthProvider();
    authFunction(auth, provider);
  }

  const values = {
    authWithGoogle,
    authWithFacebook,
    user,
    authError,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

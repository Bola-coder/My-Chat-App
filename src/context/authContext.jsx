import React, { createContext, useContext, useState } from "react";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
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

  //   Function to use auth based on provider
  const authFunction = (auth, provider, authProvider) => {
    return signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
        addDoc(colRef, {
          token: user.accessToken,
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
        })
          .then(() => {
            navigate("/chats");
          })
          .catch((error) => console.log(error));
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
    authFunction(auth, provider, GoogleAuthProvider);
  }

  //   Sign up with Facebook Option
  function authWithFacebook() {
    const provider = new FacebookAuthProvider();
    authFunction(auth, provider, FacebookAuthProvider);
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

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
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

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsuscribe;
  }, []);

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
              navigate("/chats", { replace: true });
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          // console.log("User Exist");
          navigate("/chats", { replace: true });
        }
      })
      .catch((err) => console.log("Error", err));
  }; // End of addToDB

  //   Function to use auth based on provider
  const authFunction = (auth, provider) => {
    return signInWithPopup(auth, provider)
      .then((result) => {
        const newUser = result.user;
        console.log(newUser);
        addToDb(newUser);
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

  // Sign out currently logged in user
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out successful");
      })
      .catch((err) => console.log(err));
  };
  const values = {
    authWithGoogle,
    authWithFacebook,
    logout,
    user,
    authError,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

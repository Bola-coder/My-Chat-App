import React, { createContext, useContext, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./../utils/firebase";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  auth.languageCode = "it";

  const [user, setUser] = useState(null);
  const [authError, setAuthErrorr] = useState(null);

  //   Sign up with google function.
  function signUpWithGoogle() {
    return signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log({ token }, { user }, { credential });
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error(errorCode, errorMessage, email, credential);
        setAuthErrorr(error);
      });
  }

  const values = {
    signUpWithGoogle,
    user,
    authError,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

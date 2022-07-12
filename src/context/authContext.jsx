import React, { createContext, useContext, useState } from "react";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./../utils/firebase";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  auth.languageCode = "it";

  const [user, setUser] = useState(null);
  const [authError, setAuthErrorr] = useState(null);

  //   Functio
  const authFunction = (auth, provider, authProvider) => {
    return signInWithPopup(auth, provider)
      .then((result) => {
        const credential = authProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log({ token }, { user }, { credential });
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = authProvider.credentialFromError(error);
        console.error(errorCode, errorMessage, email, credential);
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

import React from "react";
import { useAuthContext } from "../context/authContext";

const Authenticate = () => {
    const { signUpWithGoogle } = useAuthContext();

  return (
    <>
      <p>Login Page</p>
       <button onClick={signUpWithGoogle}>Sign in With Google</button>
    </>
  );
};

export default Authenticate;

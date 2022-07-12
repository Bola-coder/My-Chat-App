import React from "react";
import { useAuthContext } from "../context/authContext";

const Homepage = () => {
  const { signUpWithGoogle } = useAuthContext();
  return (
    <section>
      <button onClick={signUpWithGoogle}>Sign in With Google</button>
    </section>
  );
};

export default Homepage;

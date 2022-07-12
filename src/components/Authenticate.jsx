import React from "react";
import { useAuthContext } from "../context/authContext";
import style from "./../css/Authenticate.module.css";

const Authenticate = () => {
  const { authWithGoogle, authWithFacebook } = useAuthContext();

  return (
    <section className={style.auth}>
      <div className={style.auth__content}>
        <p>Authenticate yourself to get access to the chat platforms</p>
        <button onClick={authWithGoogle}>Authenticate With Google</button>
        <button onClick={authWithFacebook}>Authenticate With Facebook</button>
      </div>
    </section>
  );
};

export default Authenticate;

import React from "react";
import { useAuthContext } from "../context/authContext";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import style from "./../css/Authenticate.module.css";

const Authenticate = () => {
  const { authWithGoogle, authWithFacebook } = useAuthContext();

  return (
    <section className={style.auth}>
      <div className={style.auth__content}>
        <p>Authenticate yourself to get access to the chat platform</p>
        <button onClick={authWithGoogle}>
          <FaGoogle /> Authenticate With Google
        </button>
        <button onClick={authWithFacebook}>
          <FaFacebook />
          Authenticate With Facebook
        </button>
      </div>
    </section>
  );
};

export default Authenticate;

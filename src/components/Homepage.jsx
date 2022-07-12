import React from "react";
import { Link } from "react-router-dom";
import style from "./../css/Homepage.module.css";

const Homepage = () => {
  return (
    <section className={style.homepage}>
      <div className={style.homepage__content}>
        <h1>Abatoms Chat App.</h1>
        <p>A One stop place for you to chat with friends and families.</p>
        <Link to="/auth">Get Started</Link>
      </div>
    </section>
  );
};

export default Homepage;

import React from "react";
import style from "./../../css/MessageContent.module.css";

const MessageContent = () => {
  return (
    <section className={style.messageContent}>
      <div className={style.messages__received}>
        <p>Hello Guy</p>
        <p>How far na</p>
      </div>
      <div className={style.messages__sent}>
        <p>I dey oo gee</p>
        <p>How you be too?</p>
      </div>
      <div className={style.messages__received}>
        <p>Hello Guy</p>
        <p>How far na</p>
      </div>
      <div className={style.messages__sent}>
        <p>I dey oo gee</p>
        <p>How you be too?</p>
      </div>
      <div className={style.messages__received}>
        <p>Hello Guy</p>
        <p>How far na</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero at
          voluptates itaque minus unde fugit, quas voluptate, voluptatem totam
          iste accusantium reprehenderit saepe ipsa eos harum. Numquam fugit
          dolore expedita?
        </p>
      </div>
      <div className={style.messages__sent}>
        <p>I dey oo gee</p>
        <p>How you be too?</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
          adipisci dicta id impedit qui alias. Quasi corporis et fugiat hic
          possimus dolorem tempore repellendus quo repellat facilis quam soluta
          unde, explicabo magni minus maxime quaerat optio asperiores illo
          eveniet pariatur temporibus omnis deserunt iste! Maxime minus
          reprehenderit ullam ex explicabo.
        </p>
      </div>
    </section>
  );
};

export default MessageContent;

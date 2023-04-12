import React from "react";
import classes from "./Welcome.module.css";

const Welcome = () => {
  return (
    <section className={classes.welcome__section}>
      <div className={classes.welcome__header}>
        <h3 className={classes.hello}>Welcome to Website</h3>
        <h5>Keeping Communities Connected</h5>
      </div>
      <article className={classes.box}>
        <div className={classes.box__image}>
          <img src={require("../assets/no-account.png")} alt="no-account" />
        </div>
        <div className={classes.box__text}>
          <h4>I'm new user</h4>
          <button className="primary__btn">Create account</button>
        </div>
      </article>
      <article className={classes.box}>
        <div className={classes.box__image}>
          <img src={require("../assets/account.png")} alt="account" />
        </div>
        <div className={classes.box__text}>
          <h4>I have an account</h4>
          <button className={`${classes.btn__width} primary__btn`}>
            Login Now
          </button>
        </div>
      </article>
    </section>
  );
};

export default Welcome;

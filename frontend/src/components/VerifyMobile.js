import React from "react";
import Card from "./Card";
import ProgressBar from "./ProgressBar";
import classes from "./VerifyMobile.module.css";

const VerifyMobile = ({ props }) => {
  return (
    <section className="verify__section">
      <h3 className="verify__header">Verify your mobile number</h3>
      <Card>
        <ProgressBar width={66} />
        <div className={classes.header}>
          <img
            className="arrow"
            src={require("../assets/arrow.png")}
            alt="left-arrow"
          />
          <h5 className={classes.enter__email}>
            A 6-digit code has been sent as a text message to
          </h5>
        </div>
        <div className="mobile__img">
          <img src={require("../assets/mobile.png")} alt="phone" />
        </div>
        <div>
          <form className="form">
            <label htmlFor="mobile">Mobile No.</label>
            <input id="mobile" placeholder="Enter your mobile no." />
            <label htmlFor="email">Email address</label>
            <input id="email" placeholder="Enter your email id" />
            <button className="btn__width primary__btn">Continue</button>
          </form>
        </div>
      </Card>
    </section>
  );
};

export default VerifyMobile;

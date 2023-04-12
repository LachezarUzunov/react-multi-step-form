import React from "react";
import classes from "./EmailOrPhone.module.css";
import ProgressBar from "./ProgressBar";
import useFormContext from "../hooks/useFormContext";

const EmailOrPhone = () => {
  const { setStep } = useFormContext();

  const onGoingBack = () => {
    console.log("clicked");
    setStep((prevState) => prevState - 1);
  };

  const nextStep = () => {
    setStep((prevState) => prevState + 1);
  };

  return (
    <section className={classes.emailPhone__section}>
      <h3 className={classes.welcome}>Welcome to Website</h3>
      <section className={classes.box}>
        <ProgressBar width={33} />
        <div className={classes.header}>
          <img
            className="arrow"
            src={require("../assets/arrow.png")}
            alt="left-arrow"
          />
          <h5 className={classes.enter__email}>
            Enter your mobile no. & email id
          </h5>
        </div>
        <div className="mobile__img">
          <button onClick={onGoingBack}>
            <img src={require("../assets/mobile.png")} alt="phone" />
          </button>
        </div>
        <div>
          <form className={classes.form}>
            <label htmlFor="mobile">Mobile No.</label>
            <input id="mobile" placeholder="Enter your mobile no." />
            <label htmlFor="email">Email address</label>
            <input id="email" placeholder="Enter your email id" />
            <button onClick={nextStep} className="btn__width primary__btn">
              Continue
            </button>
          </form>
        </div>
        <div>
          <p>
            By signing up, I agree to the <span>Privary Policy</span> &{" "}
            <span>Terms of Use</span>
          </p>
        </div>
      </section>
    </section>
  );
};

export default EmailOrPhone;

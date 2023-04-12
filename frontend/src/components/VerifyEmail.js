import React from "react";
import classes from "./VerifyEmail.module.css";
import Card from "./Card";
import ProgressBar from "./ProgressBar";
import useFormContext from "../hooks/useFormContext";

const VerifyEmail = () => {
  const { setStep } = useFormContext();

  const nextStep = () => {
    setStep((prevState) => prevState + 1);
  };

  const previousStep = () => {
    setStep((prevState) => prevState - 1);
  };

  return (
    <section className="verify__section">
      <h3 className="verify__header">Verify your email address</h3>
      <Card>
        <ProgressBar width={66} />
        <div className={classes.header}>
          <img
            className="arrow"
            src={require("../assets/arrow.png")}
            alt="left-arrow"
          />
          <h5 className={classes.enter__email}>
            A 6-digit code has been sent to
          </h5>
        </div>
        <div className="mobile__img">
          <img src={require("../assets/email.png")} alt="phone" />
        </div>
        <div>
          <form className={classes.form}>
            <label htmlFor="mobile">Verification code</label>
            <input
              id="mobile"
              placeholder="Enter 6-digit verification code here"
            />
            <button onClick={nextStep} className="btn__width primary__btn">
              Continue
            </button>
          </form>
        </div>
        <div>
          <p>
            Didn't receive code? <span>Resend Code</span>
          </p>
          <p>OR</p>
          <p>
            <span onClick={previousStep} className={classes.or}>
              Send verification code on mobile no.
            </span>
          </p>
        </div>
      </Card>
    </section>
  );
};

export default VerifyEmail;

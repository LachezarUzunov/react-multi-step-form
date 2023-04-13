import React, { useState, useEffect } from "react";
import classes from "./VerifyEmail.module.css";
import Card from "./Card";
import ProgressBar from "./ProgressBar";
import useFormContext from "../hooks/useFormContext";

const VerifyEmail = () => {
  const { setStep, verificationCode, setVerificationCode, onValidation } =
    useFormContext();

  const [errorInput, setErrorInput] = useState(false);

  useEffect(() => {
    if (verificationCode.length === 6) {
      setErrorInput(false);
    }
  }, [verificationCode]);

  const previousStep = () => {
    setStep((prevState) => prevState - 1);
  };

  const onChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (verificationCode.length !== 6) {
      setErrorInput(true);
      return;
    } else {
      onValidation(verificationCode);
      setStep((prevState) => prevState + 1);
      setErrorInput(false);
    }
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
              value={verificationCode}
              onChange={onChange}
            />
            {errorInput ? (
              <div className="error_box">
                <p className="error_para">Please enter 6 digit code</p>
              </div>
            ) : null}
            <button onClick={onSubmit} className="btn__width primary__btn">
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
